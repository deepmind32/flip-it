import { LiaHourglassStartSolid } from "react-icons/lia";
import { FiEdit3 } from "react-icons/fi";

import Button from "./_components/button/button";
import Overview from "./_ui/overview/overview";

import styles from "./page.module.css";
import Progress from "./_ui/progress/progress";
import Weather from "./_ui/weather/weather";

import { cookies } from "next/headers";
import Link from "next/link";

export default async function Home() {
	const cookieStore = await cookies();
	const user_info = {
		name: cookieStore.get("name").value,
	};

	return (
		<main className={styles["app"]}>
			<header className={styles["app__header"]}>
				<h3>
					Hello <span>{user_info["name"]}</span> !
				</h3>

				<Link href="/edit">
					<Button type="icon">
						<FiEdit3 size="1.5rem" />
					</Button>
				</Link>
			</header>

			<section className={styles["app__overview"]}>
				<Overview progress={<Progress />} weather={<Weather />} />
			</section>

			<section className={styles["app__start_button__wrapper"]}>
				<Link href="/tracking">
					<Button className={styles["app__start_button"]}>
						<LiaHourglassStartSolid size="1.5rem" /> Start tracking
					</Button>
				</Link>
				<small>
					Optimal timing for sun exposure for today is for next 4 hours.
				</small>
			</section>
		</main>
	);
}
