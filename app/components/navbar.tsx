'use client';
import { useState } from 'react';
import Settings from './Settings';
import Button from './button';
export default function Navbar() {
	const [isSettingsOpen, setIsSettingsOpen] = useState(false);
	return (
		<nav className='relative w-[700px] mx-auto py-2 group'>
			{/* Trapezoid Background */}
			<div
				className='absolute inset-0 w-full h-full bg-yellow-400 bg-opacity-80 transition-all duration-500 ease-in-out group-hover:h-[100px]'
				style={{
					clipPath: 'polygon(0% 0%, 100% 0%, 90% 94%, 11% 100%)',
				}}
			></div>

			{/* Main Links (Always Visible) */}
			<div className='relative flex justify-center space-x-8 text-white uppercase tracking-wide py-2'>
				<Button>About</Button>
				<Button>Settings</Button>
				<Button>Theme</Button>
			</div>
			<Settings
				isOpen={isSettingsOpen}
				onClose={() => setIsSettingsOpen(false)}
			/>

			{/* Expanding Links (Hidden Initially, Positioned Absolutely) */}
			<div className='absolute left-0 top-full w-full flex justify-center space-x-8 text-white uppercase tracking-wide overflow-hidden max-h-0 opacity-0 transition-all duration-500 ease-in-out group-hover:max-h-[50px] group-hover:opacity-100'>
				<Button>Go</Button>

				<Button
					onClick={() => setIsSettingsOpen(true)}
					className='hover:text-gray-200'
				>
					Settings
				</Button>
				<Button>Go</Button>
			</div>
		</nav>
	);
}
