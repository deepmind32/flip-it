"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function store_vitamin_d(iu) {
	const cookies_store = await cookies();
	const expires_in_days = cookies_store.get("expires").value;

	// if there is no vitamin id stored then store it
	if (!cookies_store.has("vitamin_d")) {
		cookies_store.set({
			name: "vitamin_d",
			value: iu,
			httpOnly: true,
			secure: false,
			path: "/",
			maxAge: 24 * 60 * 60 * expires_in_days,
		});
	} else {
		const current_iu = cookies_store.get("vitamin_d").value;

		cookies_store.set({
			name: "vitamin_d",
			value: iu + current_iu,
			httpOnly: true,
			secure: false,
			path: "/",
			maxAge: 24 * 60 * 60 * expires_in_days,
		});
	}

	redirect("/");
}
