import chroma from 'chroma-js';

export const getRandomColor = () => {
	var color = chroma.random().hex();
	return color;
};

export function generateOppositeColor(baseColor) {
	// Create a Chroma.js color object from the base color
	var color = chroma(baseColor);

	// Get the hue value of the base color
	var hue = color.get('hsl.h');

	// Get the brightness and saturation values of the base color
	var brightness = color.get('hsl.l'); // Scale from 0-1 to 0-100
	var saturation = color.get('hsl.s'); // Scale from 0-1 to 0-100

	// Calculate the opposite brightness and saturation values
	var newBrightness = brightness < 0.5 ? 0.8 : 0.3;
	var oppositeSaturation = 100 - saturation;

	// Create the opposite color by setting the calculated values
	var oppositeColor = color.set('hsl.l', newBrightness).set('hsl.s', saturation);

	// Set the hue value from the base color
	var finalColor = oppositeColor.set('hsl.h', hue);

	// Convert the color object to hexadecimal string
	var finalColorHex = finalColor.hex();

	return finalColorHex;
}

export const generateAnalogousColors = color => {
	const baseColor = chroma(color);
	const scheme = [];

	const mainBrightness = baseColor.get('hsl.l');

	for (let i = 1; i <= 4; i++) {
		const brightnessFactor = mainBrightness > 0.5 ? 1 - i * 0.1 : 1 + i * 0.1;
		const saturationFactor = mainBrightness > 0.5 ? 1 - i * 0.05 : 1 + i * 0.05;

		const analogousColor = baseColor
			.set('hsl.h', (baseColor.get('hsl.h') + 45 * i) % 360)
			.set('hsl.s', baseColor.get('hsl.s') * saturationFactor)
			.set('hsl.l', baseColor.get('hsl.l') * brightnessFactor);

		scheme.push(analogousColor.hex());
	}

	return scheme;
};

export const generateMonochromaticColors = color => {
	const baseColor = chroma(color);
	const scheme = [];

	for (let i = 1; i <= 4; i++) {
		const monochromaticColor = baseColor.darken(i / 2).hex();
		scheme.push(monochromaticColor);
	}

	return scheme;
};

export const generateTriadicColors = color => {
	const baseColor = chroma(color);
	const scheme = [];

	for (let i = 1; i <= 4; i++) {
		const triadicColor = baseColor.set(
			'hsl.h',
			(baseColor.get('hsl.h') + i * 120) % 360
		);
		scheme.push(triadicColor.hex());
	}

	return scheme;
};

export const generateComplementaryColors = color => {
	const baseColor = chroma(color);
	const complementaryColor = baseColor.set(
		'hsl.h',
		(baseColor.get('hsl.h') + 180) % 360
	);
	const scheme = [complementaryColor.hex()];

	for (let i = 1; i <= 3; i++) {
		const interpolatedColor = chroma.mix(
			color,
			complementaryColor.hex(),
			i / 4,
			'rgb'
		);
		scheme.push(interpolatedColor.hex());
	}

	return scheme;
};

export const generateSplitComplementaryColors = color => {
	const baseColor = chroma(color);
	const complementaryColor = baseColor.set(
		'hsl.h',
		(baseColor.get('hsl.h') + 180) % 360
	);
	const splitComplementary1 = baseColor.set(
		'hsl.h',
		(baseColor.get('hsl.h') + 150) % 360
	);
	const splitComplementary2 = baseColor.set(
		'hsl.h',
		(baseColor.get('hsl.h') + 210) % 360
	);
	const scheme = [
		splitComplementary1.hex(),
		splitComplementary2.hex(),
		complementaryColor.hex(),
	];

	for (let i = 1; i <= 1; i++) {
		const interpolatedColor1 = chroma.mix(
			color,
			splitComplementary1.hex(),
			i / 2,
			'rgb'
		);
		const interpolatedColor2 = chroma.mix(
			color,
			splitComplementary2.hex(),
			i / 2,
			'rgb'
		);
		scheme.push(interpolatedColor1.hex());
	}

	return scheme;
};

export const generateDoubleSplitComplementaryColors = color => {
	const baseColor = chroma(color);
	const scheme = [];

	const complementary1 = baseColor.set('hsl.h', (baseColor.get('hsl.h') + 180) % 360);
	const complementary2 = baseColor.set('hsl.h', (baseColor.get('hsl.h') + 180) % 360);
	const splitComplementary1 = baseColor.set(
		'hsl.h',
		(baseColor.get('hsl.h') + 150) % 360
	);
	const splitComplementary2 = baseColor.set(
		'hsl.h',
		(baseColor.get('hsl.h') + 210) % 360
	);
	const doubleSplitComplementary1 = baseColor.set(
		'hsl.h',
		(baseColor.get('hsl.h') + 30) % 360
	);

	scheme.push(
		complementary1.hex(),
		complementary2.hex(),
		splitComplementary2.hex(),
		doubleSplitComplementary1.hex()
	);

	return scheme;
};

export const generateSquareColors = color => {
	const baseColor = chroma(color);
	const scheme = [];

	for (let i = 1; i <= 4; i++) {
		const squareColor = baseColor.set(
			'hsl.h',
			(baseColor.get('hsl.h') + i * 90) % 360
		);
		scheme.push(squareColor.hex());
	}

	return scheme;
};

export const generateCompoundColors = color => {
	const baseColor = chroma(color);
	const compound1 = baseColor.set('hsl.h', (baseColor.get('hsl.h') + 30) % 360);
	const compound2 = baseColor.set('hsl.h', (baseColor.get('hsl.h') + 180) % 360);
	const compound3 = baseColor.set('hsl.h', (baseColor.get('hsl.h') + 210) % 360);
	const compound4 = baseColor.set('hsl.h', (baseColor.get('hsl.h') + 330) % 360);
	const scheme = [compound1.hex(), compound2.hex(), compound3.hex(), compound4.hex()];

	return scheme;
};

export const generateShadesColors = color => {
	const baseColor = chroma(color);
	const scheme = [];

	const saturation = baseColor.get('hsl.s');

	for (let i = 1; i <= 4; i++) {
		const shadeColor = baseColor.set('hsl.s', i / 10 + saturation).hex();
		scheme.push(shadeColor);
	}

	return scheme;
};
