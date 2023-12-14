import React, { useEffect, useState } from 'react';
import {
	generateAnalogousColors,
	generateComplementaryColors,
	generateCompoundColors,
	generateDoubleSplitComplementaryColors,
	generateMonochromaticColors,
	generateOppositeColor,
	generateShadesColors,
	generateSplitComplementaryColors,
	generateSquareColors,
	generateTriadicColors,
	getRandomColor,
} from '../utils/collorShemes';
import Pallete from '../components/Pallete';
import { TiArrowShuffle } from 'react-icons/ti';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Tools = ({ mainColor, setMainColor }) => {
	return (
		<div className='fixed bottom-8 p-2 rounded-lg bg-white/50 backdrop-blur-lg flex items-center justify-center gap-2'>
			<button
				style={{ background: mainColor }}
				className={`swatch relative rounded-md`}
			>
				<input
					type='color'
					id='main-color'
					name='main-color'
					className='cursor-pointer appearance-none bg-transparent h-16 rounded w-full absolute left-0 border-none -z-10 invisible'
					value={mainColor}
					onChange={e => setMainColor(e.target.value)}
				/>
				<label
					htmlFor='main-color'
					className='flex justify-center items-center h-16 p-4 px-8 cursor-pointer text-white'
				>
					Main Color
				</label>
			</button>
			<button
				onClick={() => setMainColor(getRandomColor())}
				className='border rounded-md flex justify-center px-8 items-center h-16 bg-white hover:bg-gray-100 fl'
			>
				Randomise <TiArrowShuffle className='text-xl ml-2' />
			</button>
		</div>
	);
};

const PalleteSchemes = () => {
	const [mainColor, setMainColor] = useState('#3b5fe2');

	const [analogousColors, setAnalogousColors] = useState(
		generateAnalogousColors(generateOppositeColor(mainColor))
	);
	const [monochromaticColors, setMonochromaticColors] = useState(
		generateMonochromaticColors(mainColor)
	);
	const [triadicColors, setTriadicColors] = useState(
		generateTriadicColors(generateOppositeColor(mainColor))
	);
	const [complementaryColors, setComplementaryColors] = useState(
		generateComplementaryColors(generateOppositeColor(mainColor))
	);
	const [splitComplementaryColors, setSplitComplementaryColors] = useState(
		generateSplitComplementaryColors(generateOppositeColor(mainColor))
	);
	const [doubleSplitComplementaryColors, setDoubleSplitComplementaryColors] = useState(
		generateDoubleSplitComplementaryColors(generateOppositeColor(mainColor))
	);
	const [squareColors, setSquareColors] = useState(
		generateSquareColors(generateOppositeColor(mainColor))
	);
	const [compoundColors, setCompoundColors] = useState(
		generateCompoundColors(generateOppositeColor(mainColor))
	);
	const [shadesColors, setShadesColors] = useState(generateShadesColors(mainColor));

	useEffect(() => {
		setAnalogousColors(generateAnalogousColors(generateOppositeColor(mainColor)));
		setMonochromaticColors(generateMonochromaticColors(mainColor));
		setTriadicColors(generateTriadicColors(generateOppositeColor(mainColor)));
		setComplementaryColors(
			generateComplementaryColors(generateOppositeColor(mainColor))
		);
		setSplitComplementaryColors(
			generateSplitComplementaryColors(generateOppositeColor(mainColor))
		);
		setDoubleSplitComplementaryColors(
			generateDoubleSplitComplementaryColors(generateOppositeColor(mainColor))
		);
		setSquareColors(generateSquareColors(generateOppositeColor(mainColor)));
		setCompoundColors(generateCompoundColors(generateOppositeColor(mainColor)));
		setShadesColors(generateShadesColors(mainColor));
	}, [mainColor]);

	useEffect(() => {
		document.body.style.background = "white";
		document.body.style.color = "black";
	}, []);

	return (
		<>
			<Navbar />
			<div className='relative flex items-center flex-col w-full max-w-[1440px] px-4 sm:px-8 md:px-16 py-16'>
				<div className='font-black text-3xl md:text-5xl max-w-[500px] text-center mt-5 mb-4'>
					Find Cool Palletes
					<div>
						For Any <span className='text-blue-700 italic'>Color</span>
					</div>
				</div>
				<div className='mb-20 font-medium opacity-50'>
					Click The Color To Copy The Hex Value
				</div>
				<Tools mainColor={mainColor} setMainColor={setMainColor} />
				<div className='w-full flex flex-col gap-4 md:gap-8'>
					<Pallete
						colors={[mainColor, ...analogousColors]}
						title={'analogous Colors'}
					/>
					<Pallete
						colors={[mainColor, ...monochromaticColors]}
						title={'monochromatic Colors'}
					/>
					<Pallete
						colors={[mainColor, ...triadicColors]}
						title={'triadic Colors'}
					/>
					<Pallete
						colors={[mainColor, ...complementaryColors]}
						title={'complementary Colors'}
					/>
					<Pallete
						colors={[mainColor, ...splitComplementaryColors]}
						title={'split Complementary Colors'}
					/>
					<Pallete
						colors={[mainColor, ...doubleSplitComplementaryColors]}
						title={'double Split Complementary Colors'}
					/>
					<Pallete
						colors={[mainColor, ...squareColors]}
						title={'square Colors'}
					/>
					<Pallete
						colors={[mainColor, ...compoundColors]}
						title={'compound Colors'}
					/>
					<Pallete
						colors={[mainColor, ...shadesColors]}
						title={'shades Colors'}
					/>
				</div>
			</div>
      <Footer />
		</>
	);
};

export default PalleteSchemes;
