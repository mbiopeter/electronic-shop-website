import React from "react";
import Countdowntimer from "./Countdowntimer";

const Middlecard = () => {
	const endTime = new Date().getTime() + 3 * 24 * 60 * 60 * 1000;
	return (
		<div className="flex flex-col md:flex-row items-center justify-center mx-auto mb-10 max-w-[1170px] md:h-[500px] rounded-sm bg-black p-6 md:p-10 ">
			<div className="flex flex-col md:items-start  md:text-left">
				<h3 className="cursor-pointer font-semibold text-sm text-[#00FF66]">
					Categories
				</h3>
				<p className="font-semibold text-white text-3xl md:text-5xl my-6">
					Enhance Your Music Experience
				</p>

				<div className="rounded-[10px] px-4 py-2">
					<Countdowntimer targetTime={endTime} />
				</div>

				<div className="rounded-md w-[170px] flex justify-center py-3 px-6 bg-[#00FF66] hover:bg-[#00DC58] mt-6 cursor-pointer">
					<button className="text-white cursor-pointer">Buy Now</button>
				</div>
			</div>

			{/* Right Side: Image */}
			<div className="w-full md:w-[600px] h-auto md:h-[420px] mt-6 md:mt-0 flex md:flex-col justify-center mb-20">
				<img
					className="h-auto w-[90%] max-w-[568px] object-contain"
					src="./assets/images/jbl_boombox.png"
					alt="JBL Speaker Image"
				/>
			</div>
		</div>
	);
};

export default Middlecard;
