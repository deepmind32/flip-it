const SKIN_FACTORS = {
	"Type I": 1,
	"Type II": 0.9,
	"Type III": 0.75,
	"Type IV": 0.6,
	"Type V": 0.45,
	"Type VI": 0.3,
};
const POSTURE_FACTORS = {
	Standing: 1.0,
	Sleeping: 0.6,
};

export default function compute_vitamin_d(
	uv,
	cloud,
	skin_type,
	skin_exposed,
	posture,
	time_minutes
) {
	const k1 = 90; // conversion factor 90 IU per UV index per minute for full body with clear skin

	return (
		((uv * k1 * SKIN_FACTORS[skin_type] * skin_exposed) / 100) *
		(1 - cloud / 100) *
		POSTURE_FACTORS[posture] *
		time_minutes
	);

	// IU Vitamin D=(UVindex​×k1​)×(tminutes​)×(Askin​)×(1−Ccloud​)×
}
