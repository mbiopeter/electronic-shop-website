import React from "react";
import banner from '../../../assets/images/jbl_boombox.png';
const Banner = () => {
	return (
		<div className="flex h-auto w-full flex-col md:flex-row items-center justify-center mx-auto mb-10 rounded-lg bg-black p-6 md:p-10 ">
			<div className="flex flex-col md:items-start  md:text-left">
				<h3 className="cursor-pointer font-semibold text-sm text-[#00FF66]">
					Categories
				</h3>
				<p className="font-semibold text-white text-3xl md:text-5xl my-6">
					Enhance Your Music Experience
				</p>
				<div className="rounded-md w-[170px] flex justify-center py-3 px-6 bg-[#00FF66] hover:bg-[#00DC58] mt-6 cursor-pointer">
					<button className="text-white cursor-pointer">Buy Now</button>
				</div>
			</div>

			{/* Right Side: Image */}
			<div className="w-full h-auto md:  mt-6 md:mt-0 flex md:flex-col justify-center mb-5">
				<img
					className="h-auto w-[90%] max-w-[568px] object-contain"
					src={banner}
					alt="JBL Speaker Image"
				/>
			</div>
		</div>
	);
};

export default Banner;
