// Home.js
'use client';
import Controller from '@/app/components/controller';
import SpeedRange from '@/app/components/speed-range';
import { useKeyboardControls } from '@/app/hook/useKeyboardControls';

export default function Home() {
	useKeyboardControls();

	return (
		<main>
			<Controller />
			<SpeedRange />
			const startTime = performance.now();
			{/* fetch('/ping')
  .then(response => response.json())
  .then(data => {
    const endTime = performance.now();
    const pingTime = endTime - startTime;
    console.log(`Ping time: ${pingTime} ms`);
  }); */}
		</main>
	);
}
