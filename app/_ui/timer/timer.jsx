"use client";

import Button from "@/app/_components/button/button";
import styles from "./timer.module.css";
import { useEffect, useState } from "react";

export default function Timer({ onChange, onComplete }) {
	const [time, set_time] = useState({
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		const second_interval = setInterval(() => {
			set_time((prev) => {
				let { minutes: m, seconds: s } = prev;

				s = s + 1;
				if (s < 60) {
					return {
						minutes: m,
						seconds: s,
					};
				}

				return {
					minutes: m + 1,
					seconds: s % 60,
				};
			});
		}, 1000);

		return () => clearInterval(second_interval);
	});

	useEffect(() => {
		onChange(time["seconds"] / 60 + time["minutes"]);
	}, [time["seconds"]]);

	return (
		<section className={styles["timer"]}>
			<p className={styles["timer__time"]}>
				<span>{String(time["minutes"]).padStart(2, "0")}m</span> :{" "}
				<span>{String(time["seconds"]).padStart(2, "0")}s</span>
			</p>
			<Button onClick={onComplete}>Finish Sun Session</Button>
		</section>
	);
}
