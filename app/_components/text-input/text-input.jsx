"use client";

import styles from "./text-input.module.css";

export default function TextInput({
	name,
	placeholder,
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
			<input
				type="text"
				name={name}
				placeholder={placeholder}
				className={styles["text_input__input"]}
				{...props}
			/>
			{error && <p className={styles["text_input__error"]}>{error}</p>}
		</div>
	);
}
