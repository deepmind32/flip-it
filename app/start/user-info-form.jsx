"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { setUserCookies } from "./action";
import Button from "../_components/button/button";
import TextInput from "../_components/text-input/text-input";
import Select from "../_components/select/select";

import styles from "./page.module.css";

export default function UserInfoForm() {
	const router = useRouter();

	const [is_submitting, set_is_submitting] = useState(false);
	const [user_info, set_user_info] = useState({
		name: undefined,
		age: undefined,
		weight: undefined,
		gender: undefined,
		skin_tone: undefined,
	});

	const handle_input_change = (name, event) => {
		set_user_info((prev) => ({ ...prev, [name]: event.target.value }));
	};

	const handle_user_info_submission = async (event) => {
		event.preventDefault();

		set_is_submitting(true);
		try {
			await setUserCookies(user_info);
			router.push("/");
		} catch (err) {
			console.error(err);
		}
		set_is_submitting(false);
	};

	return (
		<>
			<form
				className={styles["start_page__form"]}
				onSubmit={handle_user_info_submission}
			>
				<TextInput
					name="name"
					label="Preferred Nickname"
					placeholder="Eg; sunshine"
					type="string"
					onChange={handle_input_change.bind(null, "name")}
				/>
				<TextInput
					name="age"
					label="Your age"
					placeholder="Eg; 30"
					type="number"
					onChange={handle_input_change.bind(null, "age")}
				/>
				<TextInput
					name="weight"
					label="Your weight (in Kilogram)"
					placeholder="Eg; 72"
					type="number"
					onChange={handle_input_change.bind(null, "weight")}
				/>
				<Select
					name="gender"
					label="Biological Gender"
					options={["Male", "Female"]}
					type="string"
					onChange={handle_input_change.bind(null, "gender")}
				/>
				<Select
					name="skin_tone"
					label="Skin Tone Type"
					options={[
						"Type I",
						"Type II",
						"Type III",
						"Type IV",
						"Type V",
						"Type VI",
					]}
					onChange={handle_input_change.bind(null, "skin_tone")}
					type="string"
					hint="We are using Fitzpatrick skin type which is standard to measure Vitamin D intake."
				/>
				<Button disabled={is_submitting}>
					{is_submitting ? "Submitting..." : "Submit"}
				</Button>
			</form>
		</>
	);
}
