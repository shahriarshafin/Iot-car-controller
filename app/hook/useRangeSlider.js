'use client';
import { sendRequest } from '@/app/utils/api';
import { useEffect, useState } from 'react';

/**
 * Custom hook for handling range slider commands.
 */
export const useRangeSlider = () => {
	const [sliderValue, setSliderValue] = useState(5);
	const [hasInteracted, setHasInteracted] = useState(false);

	useEffect(() => {
		if (hasInteracted) {
			sendRequest(`/${sliderValue}`);
		}
	}, [sliderValue, hasInteracted]);

	const handleSliderChange = (event) => {
		setSliderValue(Number(event.target.value));
		setHasInteracted(true);
	};

	return { sliderValue, handleSliderChange };
};
