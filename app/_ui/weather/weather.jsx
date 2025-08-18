import styles from "./weather.module.css";
import SunCalc from "suncalc";
import { cookies } from "next/headers";
import get_weather_data from "@/app/_utils/get_weather_data";

export default async function Weather() {
	const cookies_store = await cookies();
	const latitude = cookies_store.get("latitude").value;
	const longitude = cookies_store.get("longitude").value;

	const { weather, elevation_angle } = await get_weather_data(
		latitude,
		longitude
	);

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
					<h1>{weather?.current?.uv ?? "XX"}</h1>
					<small>Next hour: {weather?.next_hour?.uv}</small>
				</div>
				<div className={styles["progress__goal_weekly"]}>
					<p>Cloud Cover</p>
					<h2>{weather?.current?.cloud ?? "XX"}%</h2>
					<small>Next hour: {weather?.next_hour?.cloud}%</small>
				</div>
			</div>
		</div>
	);
}
