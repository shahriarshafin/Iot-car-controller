// Home.js
'use client';
import Controller from '@/app/components/controller';
import SpeedRange from '@/app/components/speed-range';
import { useKeyboardControls } from '@/app/hook/useKeyboardControls';
import { useEffect } from 'react';
import RaceUI from './components/RaceUI';

export default function Home() {
	useKeyboardControls();

	useEffect(() => {
		let audioContext: AudioContext | null = null;
		let audioBuffer: AudioBufferSourceNode | null = null;

		const initAudio = async () => {
			audioContext = new (window.AudioContext ||
				(window as any).webkitAudioContext)();
			const response = await fetch('/horn.mp3');
			const arrayBuffer = await response.arrayBuffer();
			const buffer = await audioContext.decodeAudioData(arrayBuffer);

			const playHorn = () => {
				if (audioContext) {
					audioBuffer = audioContext.createBufferSource();
					audioBuffer.buffer = buffer;
					audioBuffer.loop = true;
					// Add a small crossfade to smooth the loop
					audioBuffer.loopStart = 0.2; // Start a bit after the initial attack
					audioBuffer.loopEnd = buffer.duration - 0.2; // End a bit before the file ends
					audioBuffer.connect(audioContext.destination);
					audioBuffer.start();
				}
			};

			const stopHorn = () => {
				if (audioBuffer) {
					audioBuffer.stop();
					audioBuffer = null;
				}
			};

			const handleKeyPress = (e: KeyboardEvent) => {
				if (e.key === 'h' && !audioBuffer) {
					playHorn();
				}
			};

			const handleKeyUp = (e: KeyboardEvent) => {
				if (e.key === 'h') {
					stopHorn();
				}
			};

			window.addEventListener('keydown', handleKeyPress);
			window.addEventListener('keyup', handleKeyUp);

			return () => {
				window.removeEventListener('keydown', handleKeyPress);
				window.removeEventListener('keyup', handleKeyUp);
				if (audioBuffer) stopHorn();
				if (audioContext) audioContext.close();
			};
		};

		initAudio();
	}, []);

	return (
		<main>
			<RaceUI />
			<Controller />
			<SpeedRange />

			{/* const startTime = performance.now(); */}
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
