import { Ubuntu } from "next/font/google";

import "./_stylesheets/reset.css";
import "./_stylesheets/variables.css";
import "./_stylesheets/utilities.css";
import "./global.css";
import Debugger from "./_components/debugger/debugger";

export const metadata = {
	title: "Golden Hour",
	description:
		"Track your sun exposure & vitamin D levels with precision. Real-time tips, weather updates & reminders to keep you healthy every day.",
};

const ubuntu = Ubuntu({ weight: ["400", "500", "700"], subsets: ["latin"] });

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon-16x16.png"
			/>
			<link rel="manifest" href="/site.webmanifest" />
			<body className={ubuntu.className}>
				<main className="app_screen">{children}</main>

				{process.env.NODE_ENV === "development" && <Debugger />}
			</body>
		</html>
	);
}
