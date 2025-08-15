import Button from "../_components/button/button";
import TextInput from "../_components/text-input/text-input";
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

			<form className={styles["start_page__form"]}>
				<TextInput
					name="age"
					label="Your age"
					placeholder="Eg; 30"
					type="number"
				/>
				<TextInput
					name="weight"
					label="Your weight (in Kilogram)"
					placeholder="Eg; 72"
					type="number"
				/>
				<TextInput
					name="gender"
					label="Biological Gender"
					placeholder="Eg; male/female"
					type="string"
				/>
				<TextInput
					name="skin-tone"
					label="Skin Tone Type"
					placeholder="Eg; class 1 or class 2 or ..."
					type="string"
					hint="We are using Fitzpatrick skin type which is standard to measure Vitamin D intake."
					error="Some unexpected error occurred here"
				/>
				<Button>Submit</Button>
			</form>
		</main>
	);
}
