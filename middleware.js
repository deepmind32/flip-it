import { NextResponse } from "next/server";

const REQUIRED_COOKIES = ["name", "age", "gender", "skin_tone"];
const COOKIES_REQUIRED_PATH = ["/"];

export function middleware(request) {
	const { pathname } = request.nextUrl;

	const user_info = {
		name: request.cookies.get("name"),
		age: request.cookies.get("age"),
		gender: request.cookies.get("gender"),
		skin_tone: request.cookies.get("skin_tone"),
	};

	// if any of the cookies is undefined then, redirect them to start page
	const hasAllCookies = REQUIRED_COOKIES.every((cookie) =>
		request.cookies.has(cookie)
	);

	if (COOKIES_REQUIRED_PATH.includes(pathname) && !hasAllCookies) {
		return NextResponse.redirect(new URL("/start", request.url));
	}

	// if in the start page but already have all cookies then redict to / page
	if (hasAllCookies && pathname === "/start") {
		return NextResponse.redirect(new URL("/", request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/", "/start"],
};
