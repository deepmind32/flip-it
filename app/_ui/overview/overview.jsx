"use client";

import { useState } from "react";
import GroupedButton from "./grouped_button/grouped_button";
import styles from "./overview.module.css";

export default function Overview({progress, weather}) {
	const [is_progress_open, set_is_progress_open] = useState(true);

	const handle_button_toggle = (index) => {
		set_is_progress_open((prev) => !prev);
	};

	return (
		<section className={styles["overview"]}>
			<GroupedButton onToggle={handle_button_toggle} />

			{is_progress_open && progress}
			{!is_progress_open && weather}
		</section>
	);
}
