"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const TO_DELETE_COOKIES = ["name", "age", "gender", "skin_tone", "expires", "weight"];

export default async function clear_cookies() {
	const cookie_store = await cookies();

	TO_DELETE_COOKIES.forEach((cookie) => cookie_store.delete(cookie));
	redirect("/start");
}
