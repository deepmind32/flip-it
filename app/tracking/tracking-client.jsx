"use client";

import { useState } from "react";

import TrackingForm from "@/app/_ui/tracking-form/tracking-form";
import styles from "./page.module.css";

export default function TrackingClient({ values }) {
	const [meta, set_meta] = useState({
		uv_index: undefined,
		skin_exposed: undefined,
		cloud_cover: undefined,
		posture: undefined,
	});
	const handle_tracking_form_submit = (value) => {
		set_meta(value);
	};

	return (
		<>
			{!meta.posture && (
				<>
					<h3 style={{ textAlign: "center", marginBottom: "2rem" }}>
						Enters Current Details
					</h3>
					<TrackingForm
						values={values}
						onSubmit={handle_tracking_form_submit}
					/>
				</>
			)}
			{meta.posture && <p>this is timer</p>}
		</>
	);
}
