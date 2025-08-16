import styles from "./progress.module.css";

export default function Progress() {
	return (
		<div className={styles["progress__wrapper"]}>
			<div className={styles["progress__goal_daily"]}>
				<p>Today's Vitamin D goal</p>
				<h2>60%</h2>
				<small>3,600 IU out of target of 4,200 IU</small>
			</div>

			<div className={styles["progress__under"]}>
				<div className={styles["progress__goal_estimated"]}>
					<p>Estimated Vitamin D</p>
					<h1>
						60<span>ng/ml</span>
					</h1>
				</div>
				<div className={styles["progress__goal_weekly"]}>
					<p>Weekly Target 32,000 IU</p>
					<h2>31,000</h2>
				</div>
			</div>
		</div>
	);
}
