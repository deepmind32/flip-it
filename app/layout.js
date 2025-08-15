import "./_stylesheets/reset.css";
import "./_stylesheets/colors.css";
import "./_stylesheets/typography.css";

export const metadata = {
	title: "Golden Hour",
	description: "One stop to track your Vitamin D intake",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
