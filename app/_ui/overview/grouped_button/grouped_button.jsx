"use client";

import { useState } from "react";
import styles from "./grouped_button.module.css";

export default function GroupedButton({ onToggle }) {
	const [active_btn, set_active_btn] = useState(0);

	const handle_btn_toggle = (btn_index) => {
		set_active_btn(btn_index);

		if (active_btn !== btn_index) {
			onToggle(btn_index);
		}
	};

	return (
		<div className={styles["grouped_button"]}>
			<div className={styles["button"]}>
				<button
					className={active_btn === 0 ? styles["active"] : ""}
					onClick={handle_btn_toggle.bind(null, 0)}
				>
					Progress
				</button>
			</div>
			<div className={styles["button"]}>
				<button
					className={active_btn === 1 ? styles["active"] : ""}
					onClick={handle_btn_toggle.bind(null, 1)}
				>
					Weather
				</button>
			</div>
		</div>
	);
}
