// SpeedRange.js
'use client';
import { useRangeSlider } from '@/app/hook/useRangeSlider';

const SpeedRange = () => {
	const { sliderValue, handleSliderChange } = useRangeSlider();

	return (
		<div>
			<label>{sliderValue}</label>
			<input
				type='range'
				min='1'
				max='9'
				value={sliderValue}
				onChange={handleSliderChange}
			/>
		</div>
	);
};

export default SpeedRange;
