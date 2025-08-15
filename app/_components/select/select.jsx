import styles from "./select.module.css";

export default function Select({
	name,
	options,
	label,
	hint,
	error = "",
	...props
}) {
	return (
		<div className={styles["text_input"]}>
			<label className={styles["text_input__label"]} htmlFor={name}>
				{label}
			</label>
			{hint && <p className={styles["text_input__hint"]}>{hint}</p>}
			<select
				type="text"
				name={name}
				className={styles["text_input__input"]}
				{...props}
			>
				<option value="" disabled selected>Select your option</option>
				{options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
			{error && <p className={styles["text_input__error"]}>{error}</p>}
		</div>
	);
}
