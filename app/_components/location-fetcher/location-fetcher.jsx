"use client";

import { useState, useEffect } from "react";
import set_latitute_longitude from "./action";

export default function LocationFetcher() {
	const [location, setLocation] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(
				async (position) => {
					setLocation({
						lat: position.coords.latitude,
						lng: position.coords.longitude,
					});
					await set_latitute_longitude(
						position.coords.latitude,
						position.coords.longitude
					);
				},
				(err) => {
					setError(err.message);
				}
			);
		} else {
			setError("Geolocation is not supported by this browser.");
		}
	}, []);

	return (
		<div style={{ marginBottom: "1rem" }}>
			{error && <p style={{ color: "darkred" }}>Error: {error}</p>}
			{location && (
				<p>
					Your coordinate is {location["lat"].toFixed(1)} latitude and{" "}
					{location["lng"].toFixed(1)} longitude.
				</p>
			)}
		</div>
	);
}
