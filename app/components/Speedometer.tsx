import React, { useEffect, useState } from 'react';

const Speedometer = () => {
	const [speed, setSpeed] = useState(0);
	const [gear, setGear] = useState(3);
	const maxSpeed = 120;

	useEffect(() => {
		const handleKeyPress = (e: KeyboardEvent) => {
			const accelerationRate = 10;
			const decelerationRate = 10;

			if (e.key === 'w' || e.key === 'ArrowUp') {
				setSpeed((prev) => Math.min(maxSpeed, prev + accelerationRate));
			}
			if (e.key === 's' || e.key === 'ArrowDown') {
				setSpeed((prev) => Math.max(0, prev - decelerationRate));
			}
		};

		const handleDeceleration = () => {
			setSpeed((prev) => Math.max(0, prev - 1));
		};

		const decelerationInterval = setInterval(handleDeceleration, 100);
		window.addEventListener('keydown', handleKeyPress);

		return () => {
			clearInterval(decelerationInterval);
			window.removeEventListener('keydown', handleKeyPress);
		};
	}, []);

	return (
		<div className='absolute bottom-8 right-8'>
			<div className='relative w-48 h-48'>
				<div className='absolute inset-0 rounded-full bg-black/40 backdrop-blur' />

				<svg className='absolute inset-0 -rotate-90' viewBox='0 0 100 100'>
					{/* Gauge Numbers */}
					{[0, 1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
						<text
							key={num}
							x={50 + 38 * Math.cos((num * Math.PI * 1.6) / 8 - Math.PI * 0.8)}
							y={50 + 38 * Math.sin((num * Math.PI * 1.6) / 8 - Math.PI * 0.8)}
							fill='rgba(255,255,255,0.5)'
							fontSize='6'
							textAnchor='middle'
						>
							{num * 20}
						</text>
					))}

					{/* Gauge Arc Background */}
					<path
						d='M 15 50 A 35 35 0 1 1 85 50'
						fill='none'
						stroke='rgba(255,255,255,0.2)'
						strokeWidth='4'
						strokeLinecap='round'
					/>

					{/* Speed Indicator */}
					<path
						d='M 15 50 A 35 35 0 1 1 85 50'
						fill='none'
						stroke='rgb(255,0,85)'
						strokeWidth='4'
						strokeLinecap='round'
						strokeDasharray={`${(speed / maxSpeed) * 220} 220`}
					/>

					{/* Tick Marks */}
					{Array.from({ length: 24 }, (_, i) => (
						<line
							key={i}
							x1={50 + 32 * Math.cos((i * Math.PI * 1.6) / 24 - Math.PI * 0.8)}
							y1={50 + 32 * Math.sin((i * Math.PI * 1.6) / 24 - Math.PI * 0.8)}
							x2={50 + 35 * Math.cos((i * Math.PI * 1.6) / 24 - Math.PI * 0.8)}
							y2={50 + 35 * Math.sin((i * Math.PI * 1.6) / 24 - Math.PI * 0.8)}
							stroke='rgba(255,255,255,0.3)'
							strokeWidth='1'
						/>
					))}
				</svg>

				{/* Center Content */}
				<div className='absolute inset-0 flex flex-col items-center justify-center'>
					<div className='text-5xl font-bold text-white tracking-tighter'>
						{Math.floor(speed)}
					</div>
					<div className='text-sm text-white/60 -mt-1'>MPH</div>
				</div>

				{/* Gear Display */}
				<div className='absolute top-1/4 left-1/2 -translate-x-1/2 text-center'>
					<div className='text-[10px] text-white/60'>GEAR</div>
					<div className='text-xl font-bold text-white'>{gear}</div>
				</div>

				{/* Status Indicators */}
				<div className='absolute top-[30%] left-[30%] text-[10px] text-white/60 leading-tight'>
					<div>ABS</div>
					<div>TCR</div>
				</div>
			</div>
		</div>
	);
};

export default Speedometer;
