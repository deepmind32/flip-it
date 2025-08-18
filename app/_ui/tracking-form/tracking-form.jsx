"use client";

import Button from "@/app/_components/button/button";
import Select from "@/app/_components/select/select";
import TextInput from "@/app/_components/text-input/text-input";

import styles from "./tracking-form.module.css";
import { useState, useEffect } from "react";

export default function TrackingForm({ values, onSubmit }) {
	const [user_data, set_user_data] = useState({
		uv_index: values.uv_index,
		skin_exposed: undefined,
		cloud_cover: values.cloud_cover,
		posture: undefined,
	});
	
	const [errors, set_errors] = useState({
		uv_index: "",
		skin_exposed: "",
		cloud_cover: "",
		posture: "",
	});

	// Initialize error checking when component loads
	// to account for default values
	useEffect(() => {
		// Pre-populate fields that have default values
		if (values.uv_index) {
			set_user_data(prev => ({...prev, uv_index: values.uv_index}));
		}
		if (values.cloud_cover) {
			set_user_data(prev => ({...prev, cloud_cover: values.cloud_cover}));
		}
	}, []);

	const handle_input_change = (key, event) => {
		const value = event.target.value;
		set_user_data((prev) => ({
			...prev,
			[key]: value,
		}));
		
		// Clear error when field is filled, or set it when field is emptied
		if (value) {
			set_errors(prev => ({ ...prev, [key]: "" }));
		} else {
			set_errors(prev => ({ ...prev, [key]: "This field is required" }));
		}
	};

	const handle_form_submission = (event) => {
		event.preventDefault();
		
		// Validate all fields
		const newErrors = {};
		let hasError = false;
		
		// Check each field - properly account for default values
		Object.entries(user_data).forEach(([key, value]) => {
			// Consider the field valid if it has a value or if it's a field with a default value
			if (value === undefined || value === null || value === "") {
				// Only show errors for fields that don't have default values from props
				// or if the default value has been cleared
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
		
		onSubmit(user_data);
	};

	return (
		<form onSubmit={handle_form_submission} className={styles["form"]}>
			<TextInput
				label="UV Index"
				name="uv_index"
				type="number"
				placeholder="7"
				hint="The API we are using might not be accurate so, you can also adjust while looking at other weather's app data."
				onChange={handle_input_change.bind(null, "uv_index")}
				value={values.uv_index}
				error={errors.uv_index}
			/>
			<TextInput
				label="Skin Exposed (%)"
				name="skin_exposed"
				type="number"
				placeholder="50"
				hint="Fraction of skin exposed. 75% for shorts and t-shirts; 25% for tshirt and long pants."
				onChange={handle_input_change.bind(null, "skin_exposed")}
				error={errors.skin_exposed}
			/>
			<TextInput
				label="Cloud Cover(%)"
				name="cloud_cover"
				placeholder="50"
				type="number"
				hint="0% for thin cloud and 95% for thick clouds"
				onChange={handle_input_change.bind(null, "cloud_cover")}
				value={values.cloud_cover}
				error={errors.cloud_cover}
			/>
			<Select
				name="posture"
				label="Posture while Tracking"
				hint="Note that standing is better due to ambient UV radiations in atmosphere."
				options={["Standing", "Sleeping"]}
				onChange={handle_input_change.bind(null, "posture")}
				error={errors.posture}
			/>
			<Button>Start tracking</Button>
		</form>
	);
}
