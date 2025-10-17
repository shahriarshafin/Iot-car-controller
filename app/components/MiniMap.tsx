import React, { useEffect, useState } from 'react';

const MiniMap = () => {
	const [position, setPosition] = useState({ x: 50, y: 50 });

	useEffect(() => {
		const handleKeyPress = (e: KeyboardEvent) => {
			const moveSpeed = 2;

			switch (e.key) {
				case 'w':
				case 'ArrowUp':
					setPosition((prev) => ({
						...prev,
						y: Math.max(0, prev.y - moveSpeed),
					}));
					break;
				case 's':
				case 'ArrowDown':
					setPosition((prev) => ({
						...prev,
						y: Math.min(100, prev.y + moveSpeed),
					}));
					break;
				case 'a':
				case 'ArrowLeft':
					setPosition((prev) => ({
						...prev,
						x: Math.max(0, prev.x - moveSpeed),
					}));
					break;
				case 'd':
				case 'ArrowRight':
					setPosition((prev) => ({
						...prev,
						x: Math.min(100, prev.x + moveSpeed),
					}));
					break;
			}
		};

		window.addEventListener('keydown', handleKeyPress);
		return () => window.removeEventListener('keydown', handleKeyPress);
	}, []);

	return (
		<div className='absolute bottom-8 left-8 w-32 h-32 bg-black/50 rounded-lg overflow-hidden'>
			<div className='relative w-full h-full'>
				{/* Map background */}
				<div className='absolute inset-0 border border-gray-500/30' />

				{/* Player indicator */}
				<div
					className='absolute w-2 h-2 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1/2'
					style={{
						left: `${position.x}%`,
						top: `${position.y}%`,
						boxShadow: '0 0 8px #22d3ee',
					}}
				/>

				{/* North indicator */}
				<div className='absolute top-2 left-2 text-white/70 text-sm font-bold'>
					N
				</div>
			</div>
		</div>
	);
};

export default MiniMap;
