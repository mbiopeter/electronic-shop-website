import React, { useState, useEffect } from "react";
import Countdowntimer from "./Countdowntimer";
import Carousel from "../functions/useCarousel";

const Flashsales = () => {
	const endTime = new Date().getTime() + 3 * 24 * 60 * 60 * 1000;

	return (
		<div className="w-full h-[125px] flex gap-[470px] ">
			<div className="flex flex-col">
				<div className="flex mx-5 mt-6 w-[100px] h-[40px] gap-[16px]">
					<p className="bg-red-500 w-[15px] h-[30px] rounded-sm"></p>
					<h1>
						<span className="text-red-500 font-semibold">Today's</span>
					</h1>
				</div>

				<div className="flex ">
					<h2 className="w-[211px] h-[48px] font-bold text-3xl m-auto ml-[16px] mt-3 ">
						Flash Sales
					</h2>
					<div className="flex m-auto ">
						<Countdowntimer targetTime={endTime} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Flashsales;
