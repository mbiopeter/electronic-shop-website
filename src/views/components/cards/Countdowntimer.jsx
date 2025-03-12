import React, { useState, useEffect } from "react";

const Countdowntimer = ({ targetTime }) => {
	const calculateTimeLeft = () => {
		const difference = targetTime - new Date().getTime();
		if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

		return {
			days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
				2,
				"0"
			),
			hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(
				2,
				"0"
			),
			minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(
				2,
				"0"
			),
			seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
		};
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
		return () => clearInterval(timer);
	}, [targetTime]);

	return (
		<div className="flex justify-start gap-1 my-auto">
			{Object.entries(timeLeft).map(([unit, value], index, arr) => (
				<div key={unit} className="flex items-center">
					<div className="flex flex-col items-center justify-center w-16 h-16 bg-white text-black font-bold text-lg rounded-full shadow-md">
						<span>{value}</span>
						<span className="text-xs">
							{unit.charAt(0).toUpperCase() + unit.slice(1)}
						</span>
					</div>
					{index !== arr.length - 1 && (
						<span className="text-white text-2xl font-bold mx-2">:</span>
					)}
				</div>
			))}
		</div>
	);
};

export default Countdowntimer;
