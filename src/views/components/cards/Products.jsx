import React, { useState } from "react";
import "primeicons/primeicons.css";
import { Rating } from "primereact/rating";
// import { products } from "../../../models/productsCard.js";

const Products = ({ products = [] }) => {
	if (!Array.isArray(products)) {
		console.error("`products` is not an array:", products);
		return <p className="text-center text-gray-500">No products available.</p>;
	}

	return (
		<div className="flex flex-col justify-center w-full overflow-hidden ">
			<div className="flex transition-transform duration-500 ease-in-out bg-gray-200 pb-6 m-auto">
				{products.map((product, id) => (
					<div key={id} className="h-[350px] w-[270px] m-5 ">
						<div className="bg-gray-100 rounded-sm h-70 flex flex-col ">
							{/* Discount Badge & Icons */}
							<div className="flex justify-between">
								<p className="flex items-center h-6 w-12 bg-red-500 m-3 justify-center rounded-md text-white text-xs p-2 font-semibold">
									{product.discount}%
								</p>
								<div className="icons flex flex-col mt-3 mx-4">
									<i className="pi pi-heart mb-5 bg-white rounded-xl p-1 text-xs"></i>
									<i className="pi pi-eye bg-white rounded-xl p-1 text-xs"></i>
								</div>
							</div>

							{/* Product Image */}
							<div className="h-36 w-35  flex cursor-pointer m-auto">
								<img
									src={`assets/${product.imageSrc}`}
									alt={`Image of ${product.product_name}`}
									className="object-cover"
								/>
							</div>

							{/* Add to Cart Button */}
							<div className="mt-3">
								<p className="bg-black hover:bg-black-400 cursor-pointer rounded-b-md text-center text-white p-1 text-sm font-bold">
									Add to Cart
								</p>
							</div>
						</div>

						{/* Product Name */}
						<p className="product_name font-bold mt-2 ">
							{product.product_name}
						</p>

						{/* Price */}
						<div className="flex flex-row">
							<p className="text-red-500 font-semibold m-1">${product.price}</p>
							<p className="text-gray-400 font-semibold m-1">
								<s>${product.original_price}</s>
							</p>
						</div>

						{/* Rating and Reviews */}
						<div className="flex items-center mt-1">
							<Rating
								className="text-yellow-500"
								value={product.ratings}
								cancel={false}
							/>
							<p className="font-semibold ml-2">({product.no_of_rates})</p>
						</div>
					</div>
				))}
			</div>
			<div className="flex justify-center cursor-pointer h-10 w-50 bg-red-500 hover:bg-red-600 text-white my-4 m-auto rounded-sm font-semibold ">
				<button className="cursor-pointer">View All Products</button>
			</div>
		</div>
	);
};

export default Products;
