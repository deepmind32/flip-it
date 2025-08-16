import { HiOutlineCog6Tooth } from "react-icons/hi2";
import Button from "./_components/button/button";

import styles from "./page.module.css";

export default function Home() {
	return (
		<main className={styles["app"]}>
			<header className={styles["app__header"]}>
				<h3>
					Hello <span>Alexa</span>! 
				</h3>

				<Button type="icon">
					<HiOutlineCog6Tooth size="2rem" />
				</Button>
			</header>
		</main>
	);
}
