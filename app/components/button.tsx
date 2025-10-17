import { cn } from '@/lib/utils';
import React from 'react';

interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
	playSound?: boolean;
	variant?:
		| 'default'
		| 'destructive'
		| 'outline'
		| 'secondary'
		| 'ghost'
		| 'link';
}

const buttonVariants = {
	default: 'bg-primary text-white hover:bg-primary/90',
	destructive: 'bg-destructive text-white hover:bg-destructive/90',
	outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
	secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
	ghost: 'hover:bg-accent hover:text-accent-foreground',
	link: 'underline-offset-4 hover:underline text-primary',
};

const sizeVariants = {
	default: 'h-10 px-4 py-2',
	icon: 'h-10 w-10',
};

const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	className,
	playSound = true,
	variant = 'default',
}) => {
	const playSoundEffect = () => {
		const audio = new Audio('/beep.wav');
		audio.volume = 0.5;
		audio.play();
	};

	const handleClick = () => {
		if (playSound) {
			playSoundEffect();
		}
		onClick?.();
	};

	return (
		<button
			onClick={handleClick}
			className={cn(
				'flex items-center justify-center rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
				buttonVariants[variant],

				className
			)}
		>
			{children}
		</button>
	);
};

export default Button;
