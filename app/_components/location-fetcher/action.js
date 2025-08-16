"use server";
import { cookies } from "next/headers";

export default async function set_latitute_longitude(lat, long) {
	const coookies_store = await cookies();

	coookies_store.set({
		name: "latitude",
		value: lat,
		httpOnly: true,
		secure: false,
		path: "/",
		maxAge: 24 * 60 * 60 * 365,
	});
	coookies_store.set({
		name: "longitude",
		value: long,
		httpOnly: true,
		secure: false,
		path: "/",
		maxAge: 24 * 60 * 60 * 365,
	});
}
