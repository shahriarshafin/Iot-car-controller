'use client';
import { sendRequest } from '@/app/utils/api';
import { useEffect, useState } from 'react';

/**
 * Custom hook for handling keyboard controls with combined commands.
 */
export const useKeyboardControls = () => {
	const [activeCommand, setActiveCommand] = useState(null);
	const [keysPressed, setKeysPressed] = useState(new Set());

	const getCombinedCommand = (keys) => {
		// Combine arrow keys and WASD keys for movement commands
		if (
			(keys.has('ArrowUp') || keys.has('KeyW')) &&
			(keys.has('ArrowLeft') || keys.has('KeyA'))
		)
			return '/l';
		if (
			(keys.has('ArrowUp') || keys.has('KeyW')) &&
			(keys.has('ArrowRight') || keys.has('KeyD'))
		)
			return '/r';
		if (
			(keys.has('ArrowDown') || keys.has('KeyS')) &&
			(keys.has('ArrowLeft') || keys.has('KeyA'))
		)
			return '/k';
		if (
			(keys.has('ArrowDown') || keys.has('KeyS')) &&
			(keys.has('ArrowRight') || keys.has('KeyD'))
		)
			return '/j';
		if (keys.has('ArrowUp') || keys.has('KeyW')) return '/f';
		if (keys.has('ArrowDown') || keys.has('KeyS')) return '/b';
		if (keys.has('ArrowLeft') || keys.has('KeyA')) return '/a';
		if (keys.has('ArrowRight') || keys.has('KeyD')) return '/d';
		return '/s';
	};

	const handleKey = (event, isKeyDown) => {
		const newKeysPressed = new Set(keysPressed);

		if (isKeyDown) {
			newKeysPressed.add(event.code);
		} else {
			newKeysPressed.delete(event.code);
		}

		const combinedCommand = getCombinedCommand(newKeysPressed);

		switch (event.code) {
			case 'KeyH':
				if (isKeyDown) {
					if (activeCommand !== '/h') {
						setActiveCommand('/h');
						sendRequest('/h');
					}
				} else {
					sendRequest('/g');
					setActiveCommand(null);
				}
				break;
			case 'Space':
				if (isKeyDown) {
					if (activeCommand !== '/s') {
						setActiveCommand('/s');
						sendRequest('/s');
					}
				}
				break;
			default:
				if (combinedCommand !== activeCommand) {
					setActiveCommand(combinedCommand);
					sendRequest(combinedCommand);
				}
				break;
		}

		setKeysPressed(newKeysPressed);
	};

	useEffect(() => {
		const handleKeyDown = (event) => handleKey(event, true);
		const handleKeyUp = (event) => handleKey(event, false);

		window.addEventListener('keydown', handleKeyDown);
		window.addEventListener('keyup', handleKeyUp);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
			window.removeEventListener('keyup', handleKeyUp);
		};
	}, [keysPressed, activeCommand]);

	return null;
};
