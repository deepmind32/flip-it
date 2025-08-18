"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { setUserCookies } from "./action";
import Button from "../../_components/button/button";
import TextInput from "../../_components/text-input/text-input";
import Select from "../../_components/select/select";

import styles from "./user-info.module.css";

export default function UserInfoForm({values = undefined}) {
	const router = useRouter();

	const [is_submitting, set_is_submitting] = useState(false);
	const [errors, set_errors] = useState({
		name: "",
		age: "",
		weight: "",
		gender: "",
		skin_tone: "",
		expires: "",
	});
	const [user_info, set_user_info] = useState({
		name: undefined,
		age: undefined,
		weight: undefined,
		gender: undefined,
		skin_tone: undefined,
		expires: undefined,
	});

	// Initialize form with default values from props
	useEffect(() => {
		if (values) {
			const updatedInfo = {};
			// Only update fields that have values
			if (values.name) updatedInfo.name = values.name;
			if (values.age) updatedInfo.age = values.age;
			if (values.weight) updatedInfo.weight = values.weight;
			if (values.gender) updatedInfo.gender = values.gender;
			if (values.skin_tone) updatedInfo.skin_tone = values.skin_tone;
			if (values.expires) updatedInfo.expires = values.expires;
			
			// Update state with any default values
			if (Object.keys(updatedInfo).length > 0) {
				set_user_info(prev => ({...prev, ...updatedInfo}));
			}
		}
	}, [values]);

	const handle_input_change = (name, event) => {
		const value = event.target.value;
		set_user_info((prev) => ({ ...prev, [name]: value }));
		
		// Clear error when field is filled, or set it when field is emptied
		if (value) {
			set_errors(prev => ({ ...prev, [name]: "" }));
		} else {
			set_errors(prev => ({ ...prev, [name]: "This field is required" }));
		}
	};

	const handle_user_info_submission = async (event) => {
		event.preventDefault();

		// Validate all fields
		const newErrors = {};
		let hasError = false;
		
		// Check each field - more robust check for empty values
		Object.entries(user_info).forEach(([key, value]) => {
			if (value === undefined || value === null || value === "") {
				newErrors[key] = "This field is required";
				hasError = true;
			} else {
				newErrors[key] = "";
			}
		});
		
		// Update error state
		set_errors(newErrors);
		
		// Don't submit if there are errors
		if (hasError) {
			return;
		}

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
					value={values?.name}
					error={errors.name}
				/>
				<TextInput
					name="age"
					label="Your age"
					placeholder="Eg; 30"
					type="number"
					onChange={handle_input_change.bind(null, "age")}
					value={values?.age}
					error={errors.age}
				/>
				<TextInput
					name="weight"
					label="Your weight (in Kilogram)"
					placeholder="Eg; 72"
					type="number"
					onChange={handle_input_change.bind(null, "weight")}
					value={values?.weight}
					error={errors.weight}
				/>
				<Select
					name="gender"
					label="Biological Gender"
					options={["Male", "Female"]}
					type="string"
					onChange={handle_input_change.bind(null, "gender")}
					value={values?.gender}
					error={errors.gender}
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
					value={values?.skin_tone}
					error={errors.skin_tone}
				/>
				<TextInput
					name="expires"
					label="Account Active Time"
					placeholder="Eg; 24 days"
					type="number"
					onChange={handle_input_change.bind(null, "expires")}
					hint="All of your information are stored in form of cookies. So, set when to cookie is to be deleted. In days. Note: you can change the date later on too."
					value={values?.expires}
					error={errors.expires}
				/>
				<Button disabled={is_submitting}>
					{is_submitting ? "Submitting..." : "Submit"}
				</Button>
			</form>
		</>
	);
}
