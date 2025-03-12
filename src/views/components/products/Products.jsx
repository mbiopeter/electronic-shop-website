import React from "react";
import "primeicons/primeicons.css";
import { Rating } from "primereact/rating";

const Products = ({item, key}) => {

	return (
		<div className="flex transition-transform duration-500 ease-in-out  pb-6 m-auto">
			<div key={key} className="h-[250px] w-[150px] md:h-[290px] md:w-[220px] m-5 ">
				<div className="bg-gray-100 rounded-sm h-45 md:h-55 flex flex-col ">
					<div className="flex justify-between">
						<p className="flex items-center h-4 w-12 bg-[#DB4444] m-3 justify-center rounded-md text-white text-xs p-2 font-semibold">
							{item.discount}%
						</p>
						<div className="icons flex flex-col mt-3 mx-4">
							<i className="pi pi-heart mb-5 bg-white rounded-xl p-1 text-xs"></i>
							<i className="pi pi-eye bg-white rounded-xl p-1 text-xs"></i>
						</div>
					</div>

					<div className="flex h-[80%] w-full overflow-hidden items-center justify-center cursor-pointer m-auto">
						<img
							src={item.img}
							className="object-fit"
						/>
					</div>
				</div>
				<p className="product_name font-bold mt-2 ">
					{item.product_name}
				</p>
				<div className="flex flex-row">
					<p className="text-red-500 text-[16px] font-semibold m-1">${item.price}</p>
					<p className="text-gray-400 font-semibold m-1">
						<s>${item.original_price}</s>
					</p>
				</div>
				<div className="flex items-center mt-1">
					<Rating
						className="text-yellow-500"
						value={item.ratings}
						cancel={false}/>
					<p className="font-semibold ml-2">({item.no_of_rates})</p>
				</div>
			</div>
		</div>
	);
};

export default Products;
