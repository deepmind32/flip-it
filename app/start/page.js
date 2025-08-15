import UserInfoForm from "./user-info-form";

import styles from "./page.module.css";

export default function StartPage() {
	return (
		<main className={styles["start_page"]}>
			<header className={styles["start_page__header"]}>
				<img
					src="/logo/golden-hour.png"
					alt="Golden Hour Logo"
					height={80}
					width="auto"
				/>
				<div className={styles["start_page__header__content"]}>
					<h2>
						Welcome to{" "}
						<span className="u-color-primary u-underline">Golden Hour</span>
					</h2>
					<p>Your Daily Dose of Sunshine - Measured, Managed, Maximized.</p>
				</div>
			</header>

			<div className={styles["start_page__divider"]} />

			<div className={styles["start_page__content"]}>
				<p>
					Your Vitamin D requirements are influenced by several factors such as
					age, gender, skin type, and more. Please complete the form below to
					receive personalized guidance for monitoring your Vitamin D levels.
				</p>
				<small>
					Your information will be stored securely in cookies and will not be
					shared with third parties. We respect your privacy and handle your
					data with care.
				</small>
			</div>

			<UserInfoForm />
		</main>
	);
}
