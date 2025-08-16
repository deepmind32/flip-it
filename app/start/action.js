"use server";

import { cookies } from "next/headers";

export async function setUserCookies(user_info) {
	const cookies_names = Object.keys(user_info);

	const cookie = await cookies();

	cookies_names.forEach((name) => {
		cookie.set({
			name,
			value: user_info[name],
			httpOnly: true,
			secure: false,
			path: "/",
			maxAge: 24 * 365 * 60 * 60,
		});
	});

	return true;
}
