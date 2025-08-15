import "./_stylesheets/reset.css";
import "./_stylesheets/colors.css";
import "./_stylesheets/typography.css";

export const metadata = {
	title: "Golden Hour",
	description: "Track your sun exposure & vitamin D levels with precision. Real-time tips, weather updates & reminders to keep you healthy every day.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			<link rel="manifest" href="/site.webmanifest" />
			<body>{children}</body>
		</html>
	);
}
