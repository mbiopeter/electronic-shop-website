import React, {useEffect, useState } from "react";
import "primeicons/primeicons.css";
import { Rating } from "primereact/rating";
import { Link } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { allProducts, history, isHistory, isProductLiked, wishList } from "../../../model/products/products";
const Products = ({ item }) => {
	
	const discount = Math.round((item.offerPrice - item.price) / item.price * 100);
	const [liked, setLiked] = useState(isProductLiked(wishList, item.id));

	const toggleLike = () => {
		setLiked(prevLiked => !prevLiked);
		if (liked) {
			wishList.pop(item);
		} else {
		wishList.push(item);
		}
	};


	return (
		<div className="flex transition-transform duration-500 ease-in-out pb-6">
			<div className="h-[300px] w-[200px] md:h-[320px] md:w-[220px]">
				<div className="bg-gray-100 rounded-sm h-55 md:h-60 flex flex-col">
					<div className="flex justify-between">
						<p className="flex items-center h-4 w-12 bg-[#DB4444] m-3 justify-center rounded-md text-white text-xs p-2 font-semibold">
						{discount}%
						</p>
						<div className="icons flex flex-col gap-1 mt-3 mx-4">
						<FavoriteIcon
							fontSize="small"
							onClick={toggleLike} 
							className={`${liked ? 'text-[#DB4444]' : 'text-gray-500'} cursor-pointer`}
						/>
						<Link to={`/product/${item.id}`}>
							<VisibilityIcon fontSize="small" className="text-gray-500 cursor-pointer"/>
						</Link>
						</div>
					</div>
					<div className="flex h-[80%] w-full overflow-hidden items-center justify-center m-auto">
						<img
						src={item.images[0]}
						className="object-fit"
						alt={item.name}
						/>
					</div>
				</div>
				<p className="product_name font-bold mt-2 ">
					{item.name}
				</p>
				<div className="flex flex-row">
					<p className="text-red-500 text-[16px] font-semibold m-1">${item.price}</p>
					<p className="text-gray-400 font-semibold m-1">
						<s>${item.offerPrice}</s>
					</p>
				</div>
				<div className="flex items-center mt-1">
					<Rating
						className="text-yellow-500"
						value={item.ratings}
						cancel={false}/>
					<p className="font-semibold ml-2">({item.ratingsCount})</p>
				</div>
			</div>
		</div>
	);
};

export default Products;
