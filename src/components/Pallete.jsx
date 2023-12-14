import React, { useState } from 'react';
import { FiCopy } from 'react-icons/fi';
import { TbDownload } from 'react-icons/tb';

function copyToClipboard(text) {
	const el = document.createElement('textarea');
	el.value = text;
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
}

const Color = ({ color }) => {
	const [text, setText] = useState(
		<>
			{color} <FiCopy />
		</>
	);

	return (
		<div
			style={{ background: color }}
			onClick={() => {
				copyToClipboard(color);
				setText('Copied');

				setTimeout(() => {
					setText(
						<>
							{color} <FiCopy />
						</>
					);
				}, 1000);
			}}
			className={`swatch cursor-pointer p-4 flex-1 h-16 md:h-24 rounded-md flex justify-center items-center`}
		>
			<div className='hidden  swatch-text md:flex gap-2 items-center opacity-0 bg-white/30 hover:bg-white/40 px-2 py-1 text-white rounded-md transition-all cursor-pointer'>
				{text}
			</div>
		</div>
	);
};

const Pallete = ({ colors, title }) => {
	const [text, setText] = useState(
		<>
			Copy Whole Pallete <TbDownload />
		</>
	);
	return (
		<div className='w-full flex flex-col gap-2 md:gap-4 items-start'>
			<h3 className='text-base md:text-xl flex items-center gap-2 capitalize font-semibold'>
				{title}{' '}
				<span
					onClick={() => {
						copyToClipboard(colors.toString());
						setText('Copied');

						setTimeout(() => {
							setText(
								<>
									Copy Whole Pallete <TbDownload />
								</>
							);
						}, 1000);
					}}
					className='rounded-md cursor-pointer flex bg-green-500/20 hover:bg-green-500/30 px-2 py-1 text-xs md:text-sm items-center justify-center gap-2 font-medium text-green-600'
				>
					{text}
				</span>
			</h3>
			<div className='flex items-center gap-3 md:gap-4 w-full'>
				{colors.map((color, index) => (
					<Color key={index} color={color} />
				))}
			</div>
		</div>
	);
};

export default Pallete;
