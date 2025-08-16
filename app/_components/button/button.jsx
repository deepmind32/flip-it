"use client";

import styles from "./button.module.css";

export default function Button({
	children,
	disabled,
	className = "",
	type = "button",
	...attr
}) {
	return (
		<button
			className={`${styles["button"]} ${
				styles[`button--${type}`]
			} ${className}`}
			{...attr}
			disabled={disabled}
		>
			{children}
		</button>
	);
}
