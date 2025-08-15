"use client";

import styles from "./button.module.css";

export default function Button({ children, className = "", ...attr }) {
	return (
		<button className={`${styles["button"]} ${className}`} {...attr}>
			{children}
		</button>
	);
}
