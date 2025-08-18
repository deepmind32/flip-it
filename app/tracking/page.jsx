import { cookies } from "next/headers";

import get_weather_data from "../_utils/get_weather_data";
import TrackingClient from "./tracking-client";

export default async function TrackingPage() {
	const cookie_store = await cookies();

	const { weather: weather_data } = await get_weather_data(
		cookie_store.get("latitude").value,
		cookie_store.get("longitude").value
	);
	const form_values = {
		uv_index: weather_data?.current?.uv,
		cloud_cover: weather_data?.current?.cloud,
	};

	return <TrackingClient values={form_values} />;
}
