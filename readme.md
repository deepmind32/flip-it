# Golden Hour

**Track your sun exposure & vitamin D levels with precision. Real-time tips, weather updates & reminders to keep you healthy every day.**

Golden Hour is a research-driven tool to track sun exposure and estimate Vitamin D synthesis using solar geometry and weather data. The project combines open APIs with established biophysical models to provide accurate, science-backed insights.

## What We Did
We built Golden Hour as a data-driven system that:
- Computes **solar position** (elevation, azimuth, sunrise, sunset) using [SunCalc](https://github.com/mourner/suncalc)
- Integrates **weather data** (cloud cover, temperature, UV index when available) from [Open-Meteo](https://open-meteo.com/)
- Estimates **ground-level UVB** from solar angle and atmospheric conditions
- Models **Vitamin D synthesis** considering exposure time, skin area, pigmentation, and atmospheric attenuation

## How We Did It
- **Solar geometry**: We calculate solar elevation and azimuth using SunCalc to determine whether UVB radiation is strong enough for Vitamin D synthesis.
- **Atmospheric factors**: Air mass and cloud cover are factored in using Open-Meteo data. Ozone absorption is optionally included when available.
- **Vitamin D model**: We implemented a simplified biophysical formula inspired by research (Engelsen et al., 2005; Webb et al., 2010) to translate UVB exposure into estimated Vitamin D production.

## Vitamin D Computation Formula
The Vitamin D synthesis estimate is based on the following model:

VitD_prod = k * UV Index * skin_fraction * pigment_factor * exposure_time * (1 - cloud_cover) * posture_factor

Where:
- `UV Index`: UV Index from OpenMeteo API
- `skin_fraction`: fraction of body surface exposed (e.g., 0.15 for face/arms, 0.25–0.35 for shorts + T-shirt)
- `pigment_factor`: skin type factor (lighter ≈ 1.0, darker ≈ 0.5–0.7)
- `exposure_time`: duration of exposure in minutes
- `k`: biological conversion efficiency constant
- `cloud_cover`: thickness of clouds in the sky
- `posture_factor`: standing absorbs more UVB radiation due to scattering of sun rays in atmosphere, this factor accounts for that measure

### Key Insights
- Solar elevation < 30 degrees -> negligible Vitamin D synthesis  
- Cloud cover > 80% -> irradiance reduced to ~20–30%  
- Fair skin, 25% body exposed, 15 minutes at noon → ~1000–2000 IU Vitamin D at mid-latitudes  

## Data Sources
- [SunCalc](https://github.com/mourner/suncalc) for solar geometry  
- [Open-Meteo](https://open-meteo.com/) for weather and cloud cover  

## Why It Matters
Vitamin D plays a vital role in bone health, immunity, and overall wellbeing. By combining solar geometry, atmospheric science, and biophysical models, Golden Hour helps users make informed decisions about optimal sun exposure for healthy Vitamin D levels.
