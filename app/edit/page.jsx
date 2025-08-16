import { cookies } from "next/headers";
import UserInfoForm from "../_ui/user-info-form/user-info-form";

import styles from "./page.module.css";

export default async function EditPage() {
	const cookies_store = await cookies();
	const user_info = {
		name: cookies_store.get("name").value,
		age: cookies_store.get("age").value,
		gender: cookies_store.get("gender").value,
		weight: cookies_store.get("weight").value,
		skin_tone: cookies_store.get("skin_tone").value,
		expires: cookies_store.get("expires").value,
	};

	return (
		<>
			<h2 style={{ textAlign: "center", marginBottom: "4rem" }}>
				Edit your details
			</h2>
			<UserInfoForm values={user_info} />
		</>
	);
}
