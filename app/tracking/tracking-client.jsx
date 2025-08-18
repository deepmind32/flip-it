"use client";

import { useState } from "react";

import TrackingForm from "@/app/_ui/tracking-form/tracking-form";
import styles from "./page.module.css";
import Timer from "../_ui/timer/timer";
import compute_vitamin_d from "../_utils/compute_vitamin_d";
import store_vitamin_d from "./action";

export default function TrackingClient({ skin_type, values, onComplete }) {
	const [time, set_time] = useState(0);
	const [meta, set_meta] = useState({
		uv_index: undefined,
		skin_exposed: undefined,
		cloud_cover: undefined,
		posture: undefined,
	});
	const handle_tracking_form_submit = (value) => {
		set_meta(value);
	};

	const handle_time_change = (time_minutes) => {
		set_time(time_minutes);
	};

	const vitamin_d_iu = compute_vitamin_d(
		meta["uv_index"],
		meta["cloud_cover"],
		skin_type,
		meta["skin_exposed"],
		meta["posture"],
		time
	);

	const handle_end_session = async () => {
		await store_vitamin_d(vitamin_d_iu);
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
			{meta.posture && (
				<>
					<h3 style={{ textAlign: "center", marginBottom: "2.5rem" }}>
						Tracking Started
					</h3>
					<div className={styles["timer__wrapper"]}>
						<Timer
							onChange={handle_time_change}
							onComplete={handle_end_session}
						/>
						{meta.posture && (
							<p style={{ textAlign: "center" }}>
								You have accumulated{" "}
								<span style={{ fontWeight: 500 }}>{vitamin_d_iu} IU</span>{" "}
								Vitamin D in this session.
							</p>
						)}
					</div>
				</>
			)}
		</>
	);
}
