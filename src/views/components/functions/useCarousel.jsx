import React, { useState, useEffect } from "react";
import { products } from "../../../models/productsCard.js";
import Products from "../cards/Products.jsx";

const useCarousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [itemsPerPage, setItemsPerPage] = useState(3);
	useEffect(() => {
		const updateItemsPerPage = () => {
			if (window.innerWidth >= 1280) {
				setItemsPerPage(4);
			} else if (window.innerWidth >= 1024) {
				setItemsPerPage(3);
			} else if (window.innerWidth >= 768) {
				setItemsPerPage(2);
			} else if (window.innerWidth >= 640) {
				setItemsPerPage(2);
			} else {
				setItemsPerPage(1);
			}
		};

		updateItemsPerPage();
		window.addEventListener("resize", updateItemsPerPage);

		return () => window.removeEventListener("resize", updateItemsPerPage);
	}, []);

	const nextSlide = () => {
		if (currentIndex + itemsPerPage < products.length) {
			setCurrentIndex(currentIndex + 1);
		}
	};

	const prevSlide = () => {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1);
		}
	};

	return (
		<div className=" mt-7">
			<div className="flex flex-row-reverse fi -mt-17 m-10 gap-7 absolute left-0 right-0">
				{/* Carousel Buttons */}
				<button
					onClick={nextSlide}
					disabled={currentIndex + itemsPerPage >= products.length}
					className="bg-gray-200 h-8 p-1 cursor-pointer rounded-full text-xs shadow-md disabled:opacity-20">
					<i className="pi pi-arrow-right"></i>
				</button>
				<button
					onClick={prevSlide}
					disabled={currentIndex === 0}
					className="bg-gray-200 h-8 p-1 cursor-pointer rounded-full text-xs shadow-md transition-all duration-300 ease-in-out disabled:opacity-30">
					<i className="pi pi-arrow-left"></i>
				</button>
			</div>
			<Products
				products={products.slice(currentIndex, currentIndex + itemsPerPage)}
			/>
		</div>
	);
};

export default useCarousel;
