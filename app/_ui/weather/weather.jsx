import styles from "./weather.module.css";
import SunCalc from "suncalc";
import { cookies } from "next/headers";

async function get_weather_details(latitude, longitude) {
	const get_url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=uv_index_max&current=cloud_cover,temperature_2m`;

	try {
		const request = await fetch(get_url);
		const response = await request.json();

		return response;
	} catch (err) {
		console.error(err);
	}
}

function getSolarElevation(lat, lon, date = new Date()) {
	const pos = SunCalc.getPosition(date, lat, lon);
	return pos.altitude * (180 / Math.PI); // in degrees
}

export default async function Weather() {
	const cookies_store = await cookies();
	const latitude = cookies_store.get("latitude").value;
	const longitude = cookies_store.get("longitude").value;

	const weather = await get_weather_details(latitude, longitude);
	const elevation_angle = getSolarElevation(latitude, longitude);

	return (
		<div className={styles["progress__wrapper"]}>
			<div className={styles["progress__goal_daily"]}>
				<p>Solar Elevation Angle</p>
				<h2>{elevation_angle.toFixed(2)}&deg;</h2>
				<small>
					{elevation_angle > 45
						? "Optimal time for Vitamin D"
						: "Inefficient time for Vitamin D"}
				</small>
			</div>

			<div className={styles["progress__under"]}>
				<div className={styles["progress__goal_estimated"]}>
					<p>UV Index</p>
					<h1>{weather?.["daily"]?.["uv_index_max"][0] ?? "XX"}</h1>
				</div>
				<div className={styles["progress__goal_weekly"]}>
					<p>Cloud Cover</p>
					<h2>{weather?.["current"]?.["cloud_cover"] ?? "XX"}%</h2>
				</div>
			</div>
		</div>
	);
}
