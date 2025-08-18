"use client";

import Button from "@/app/_components/button/button";
import Select from "@/app/_components/select/select";
import TextInput from "@/app/_components/text-input/text-input";

import styles from "./tracking-form.module.css";
import { useState } from "react";

export default function TrackingForm({ values, onSubmit }) {
	const [user_data, set_user_data] = useState({
		uv_index: values.uv_index,
		skin_exposed: undefined,
		cloud_cover: values.cloud_cover,
		posture: undefined,
	});

	const handle_input_change = (key, event) => {
		set_user_data((prev) => ({
			...prev,
			[key]: event.target.value,
		}));
	};

	const handle_form_submission = (event) => {
		event.preventDefault();
		onSubmit(user_data);
	};

	return (
		<form onSubmit={handle_form_submission} className={styles["form"]}>
			<TextInput
				label="UV Index"
				name="uv_index"
				placeholder="7"
				hint="The API we are using might not be accurate so, you can also adjust while looking at other weather's app data."
				onChange={handle_input_change.bind(null, "uv_index")}
				value={values.uv_index}
			/>
			<TextInput
				label="Skin Exposed (%)"
				name="skin_exposed"
				placeholder="50"
				hint="Fraction of skin exposed. 75% for shorts and t-shirts; 25% for tshirt and long pants."
				onChange={handle_input_change.bind(null, "skin_exposed")}
			/>
			<TextInput
				label="Cloud Cover(%)"
				name="cloud_cover"
				placeholder="50"
				hint="0% for think cloud and 5% for thick clouds"
				onChange={handle_input_change.bind(null, "cloud_cover")}
				value={values.cloud_cover}
			/>
			<Select
				name="posture"
				label="Posture while Tracking"
				hint="Note that standing is better due to ambient UV radiations in atmosphere."
				options={["Standing", "Sleeping"]}
				onChange={handle_input_change.bind(null, "posture")}
			/>
			<Button>Start tracking</Button>
		</form>
	);
}
