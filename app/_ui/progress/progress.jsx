import { cookies } from "next/headers";
import styles from "./progress.module.css";

export default async function Progress() {
	const cookie_store = await cookies();
	const vitamin_d = cookie_store.get("vitamin_d")?.value ?? 0;

	return (
		<div className={styles["progress__wrapper"]}>
			<div className={styles["progress__goal_daily"]}>
				<p>Today's Vitamin D goal</p>
				<h2>{((+vitamin_d / 4200) * 100).toFixed(2)}%</h2>
				<small>{(+vitamin_d).toFixed(0)} IU out of target of 4,200 IU</small>
			</div>

			<div className={styles["progress__under"]}>
				<div className={styles["progress__goal_estimated"]}>
					<p>Estimated Vitamin D</p>
					<h1>
						{18 + vitamin_d / 100}
						<span>ng/ml</span>
					</h1>
				</div>
				<div className={styles["progress__goal_weekly"]}>
					<p>Weekly Target 32,000 IU</p>
					<h2>To be implemented</h2>
				</div>
			</div>
		</div>
	);
}
