"use client";

import styles from "./button.module.css";

export default function Button({ children, disabled, className = "", ...attr }) {
	return (
		<button className={`${styles["button"]} ${className}`} {...attr} disabled={disabled}>
			{children}
		</button>
	);
}
