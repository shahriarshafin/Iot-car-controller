import React, { useEffect, useState } from 'react';
import Speedometer from './Speedometer';

const RaceUI = () => {
	const [rpm, setRpm] = useState(0);
	const [lapTime, setLapTime] = useState('00:00.000');
	const [bestLap, setBestLap] = useState('00:00.000');

	const [nitro, setNitro] = useState(50);

	return (
		<div className='fixed inset-0 pointer-events-none'>
			{/* Race Position */}
			<div className='absolute top-40 right-4 pr-2 pl-10  bg-gradient-to-l from-black/90 via-black/70 to-transparent rounded-l-lg border-r-[5px] border-rose-500'>
				<div className='text-xl  text-white tracking-wide'>
					AIR TIME: 0.99 s
				</div>
			</div>
			<div className='absolute top-[200px] right-4 pr-2 pl-10  bg-gradient-to-l from-black/90 via-black/70 to-transparent rounded-l-lg border-r-[5px] border-rose-500'>
				<div className='text-xl  text-white tracking-wide'>KNOCKDOWN X2</div>
			</div>

			{/* Lap Times */}
			<div className='absolute top-4 left-4 bg-black/40 backdrop-blur px-4 py-2 rounded-lg'>
				<div className='text-sm text-white/60'>CURRENT LAP</div>
				<div className='text-xl font-bold text-white'>{lapTime}</div>
				<div className='text-sm text-white/60 mt-2'>BEST LAP</div>
				<div className='text-xl font-bold text-yellow-400'>{bestLap}</div>
			</div>

			{/* Tachometer */}
			<div className='absolute bottom-8 left-8'>
				<div className='relative w-48 h-48'>
					<div className='absolute inset-0 rounded-full bg-black/40 backdrop-blur' />
					<svg className='absolute inset-0 -rotate-90' viewBox='0 0 100 100'>
						{/* RPM Arc */}
						<path
							d='M 15 50 A 35 35 0 1 1 85 50'
							fill='none'
							stroke='rgba(255,255,255,0.2)'
							strokeWidth='4'
							strokeLinecap='round'
						/>
						<path
							d='M 15 50 A 35 35 0 1 1 85 50'
							fill='none'
							stroke='rgb(0,255,255)'
							strokeWidth='4'
							strokeLinecap='round'
							strokeDasharray={`${(rpm / 8000) * 220} 220`}
						/>
					</svg>
					<div className='absolute inset-0 flex flex-col items-center justify-center'>
						<div className='text-4xl font-bold text-white'>
							{Math.floor(rpm)}
						</div>
						<div className='text-sm text-white/60'>RPM</div>
					</div>
				</div>
			</div>

			{/* Nitro Gauge */}
			<div className='absolute left-1/2 bottom-4 -translate-x-1/2 w-64'>
				<div className='h-2 bg-black/40 rounded-full overflow-hidden'>
					<div
						className='h-full bg-blue-500 transition-all duration-300'
						style={{ width: `${50}%` }}
					/>
				</div>
				<div className='text-center text-sm text-white/60 mt-1'>NITRO</div>
			</div>

			{/* Gear Shift Indicator */}
			<div className='absolute left-1/2 top-1/4 -translate-x-1/2 flex space-x-1'>
				{[1, 2, 3, 4, 5, 6].map((light) => (
					<div
						key={light}
						className={`w-3 h-3 rounded-full ${
							rpm > light * 1000 ? 'bg-green-500' : 'bg-white/20'
						}`}
					/>
				))}
			</div>

			{/* Speedometer (existing component) */}
			<Speedometer />
		</div>
	);
};

export default RaceUI;
