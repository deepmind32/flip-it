"use client";

import { VscDebug } from "react-icons/vsc";
import Button from "../button/button";
import clear_cookies from "./action";

export default function Debugger() {
	const handle_debug = async () => {
		await clear_cookies();
	};

	return (
		<Button
			type="icon"
			style={{
				position: "fixed",
				bottom: "2rem",
				right: "2rem",
				border: "2px solid var(--color-accent)",
				backgroundColor: "var(--color-primary)",
			}}
			onClick={handle_debug}
		>
			<VscDebug size="2rem" color="white"/>
		</Button>
	);
}
