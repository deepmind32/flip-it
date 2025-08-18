import SunCalc from "suncalc";
import { cookies } from "next/headers";

// current => temperature, cloud cover, time
// hourly data => cloud_cover, time, uv_index
async function get_weather_details(latitude, longitude) {
	const get_url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=uv_index_max&hourly=,uv_index,cloud_cover&current=cloud_cover,temperature_2m&timezone=GMT&forecast_days=1&timeformat=unixtime&forecast_hours=24`;

	try {
		const request = await fetch(get_url);
		const response = await request.json();

		const {
			time: current_time,
			cloud_cover: current_cloud,
			temperature_2m: curr_temp,
		} = response.current;
		const elevation = response.elevation;
		const { cloud_cover: hourly_cloud, uv_index: hourly_uv } = response.hourly;

		const [next_hour_cloud, next_hour_uv] = [hourly_cloud[1], hourly_uv[1]];

		const weather_data = {
			current: {
				time: current_time,
				cloud: current_cloud,
				temperature: curr_temp,
				uv: hourly_uv[0],
			},
			elevation,
			next_hour: {
				cloud: next_hour_cloud,
				uv: next_hour_uv,
			},
		};

		return weather_data;
	} catch (err) {
		console.error(err);
	}
}

function getSolarElevation(lat, lon, date = new Date()) {
	const pos = SunCalc.getPosition(date, lat, lon);
	return pos.altitude * (180 / Math.PI); // in degrees
}

export default async function get_weather_data() {
	const cookies_store = await cookies();
	const latitude = cookies_store.get("latitude").value;
	const longitude = cookies_store.get("longitude").value;

	const weather = await get_weather_details(latitude, longitude);
	const elevation_angle = getSolarElevation(latitude, longitude);

	return {
		weather,
		elevation_angle,
	};
}
