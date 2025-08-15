"use server";

import { cookies } from "next/headers";

export async function setUserCookies(user_info) {
	const cookies_names = Object.keys(user_info);

	cookies_names.forEach((name) => {
		cookies().set({
			name,
			value: user_info[name],
			httpOnly: true,
			secure: true,
			path: "/",
			maxAge: 24 * 365 * 60 * 60,
		});
	});

	return true;
}
