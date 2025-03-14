import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Link } from "react-router-dom";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PersonIcon from "@mui/icons-material/Person";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import PreviewIcon from "@mui/icons-material/Preview";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { wishList } from "../../../model/products/products";

const UpBar = () => {
	const [active, setActive] = useState("Home");
	const [isOpen, setIsOpen] = useState(false);
	const [dropdownVisible, setDropdownVisible] = useState(false);

	const navLinks = [
		{ name: "Home", to: "/" },
		{ name: "Contact", to: "/contact   " },
		{ name: "About", to: "/abaut" },
		{ name: "Sign Up", to: "/auth" },
	];

	const userDropdownData = [
		{
			name: "Manage My Account",
			to: "/account",
			icon: <PersonIcon fontSize="small" className="text-[#FAFAFA]" />,
		},
		{
			name: "My Order",
			icon: <LocalMallIcon fontSize="small" className="text-[#FAFAFA]" />,
		},
		{
			name: "My Cancellations",
			icon: <DoNotDisturbIcon fontSize="small" className="text-[#FAFAFA]" />,
		},
		{
			name: "My Reviews",
			icon: <PreviewIcon fontSize="small" className="text-[#FAFAFA]" />,
		},
		{
			name: "Log Out",
			icon: <ExitToAppIcon fontSize="small" className="text-[#FAFAFA]" />,
			isRed: true,
		},
	];

	const liked = wishList.length;

	return (
		<div className="w-full flex-col sticky top-0 z-50">
			{/* Top most bar */}
			<div className="h-[48px] w-full flex items-center px-[50px] lg:px-[150px] justify-end bg-black">
				<div className="flex justify-end md:justify-between w-3/4">
					<div className="hidden md:flex flex-row gap-2">
						<span className="text-white text-sm">
							Summer Sale For All Swim Suits And Free Express Delivery - OFF
							50%!
						</span>
						<span className="font-semibold text-white cursor-pointer">
							Shop Now
						</span>
					</div>
					<div className="flex items-center gap-2 cursor-pointer text-white">
						<span className="text-sm">English</span>
						<KeyboardArrowDownIcon fontSize="small" />
					</div>
				</div>
			</div>

			{/* Lower Bar */}
			<div
				className={`px-10 lg:px-36 relative flex justify-between h-20 shadow-lg items-center bg-white`}>
				<span className="text-xl md:text-2xl font-bold text-black">
					Exclusive
				</span>

				<div className="hidden lg:flex gap-12">
					{navLinks.map((item) => (
						<Link key={item.name} to={item.to}>
							<span
								onClick={() => setActive(item.name)}
								className={`cursor-pointer capitalize text-black text-lg ${
									active === item.name ? "font-bold text-blue-700" : ""
								}`}>
								{item.name}
							</span>
						</Link>
					))}
				</div>

				<div className="flex items-center gap-6">
					<div className="hidden lg:flex items-center border border-gray-300 rounded-full px-4 py-2 shadow-sm">
						<input
							type="text"
							placeholder="Search anything..."
							className="border-none outline-none text-sm text-black w-36"
						/>
						<SearchIcon className="text-gray-500" />
					</div>
					<Link to={"/wishlist"}>
						<div className="relative">
							<FavoriteBorderIcon className="text-gray-500 cursor-pointer" />
							<div className="absolute bg-[#DB4444] w-[17px] h-[17px] p-[1px] -top-1 -right-1 rounded-full flex items-center justify-center text-[9px] text-[#FAFAFA] font-[400]">
								{liked}
							</div>
						</div>
					</Link>
					<Link to={"/cart"}>
						<div className="relative">
							<ShoppingCartOutlinedIcon className="text-gray-500 cursor-pointer" />
							<div className="absolute bg-[#DB4444] w-[17px] h-[17px] p-[1px] -top-1 -right-1 rounded-full flex items-center justify-center text-[9px] text-[#FAFAFA] font-[400]">
								2
							</div>
						</div>
					</Link>
					<div
						className="bg-[#DB4444] rounded-full flex items-center justify-center p-1 cursor-pointer"
						onClick={() => {
							setDropdownVisible(!dropdownVisible);
							setIsOpen(false);
						}}>
						<PersonOutlinedIcon fontSize="small" className="text-[#FAFAFA]" />
					</div>
					<div
						className="lg:hidden"
						onClick={() => {
							setIsOpen(true);
							setDropdownVisible(false);
						}}>
						<MenuOutlinedIcon className="text-black cursor-pointer" />
					</div>
				</div>

				{/* User Dropdown */}
				<AnimatePresence>
					{dropdownVisible && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="absolute top-full z-100 right-[58px] lg:right-[140px] w-[250px] bg-[#1E1F55FF] opacity-[0.9] backdrop-blur-lg shadow-lg rounded-sm p-2">
							<ul className="flex flex-col space-y-2">
								{userDropdownData.map((item, index) => (
									<Link to={item.to}>
										<li
											key={index}
											className={`text-[16px] text-[#FAFAFA] font-[400] flex items-center gap-2 p-2 hover:bg-[#000000] cursor-pointer ${
												item.isRed ? "text-red-600" : ""
											}`}>
											<span>{item.icon}</span> {item.name}
										</li>
									</Link>
								))}
							</ul>
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			{/* Mobile Navigation Pop-up */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						exit={{ x: "100%" }}
						transition={{ duration: 0.5 }}
						className="fixed top-0 right-0 h-full w-3/4 bg-white z-50 shadow-lg flex flex-col p-10">
						<div
							onClick={() => setIsOpen(false)}
							className="absolute right-5 top-5 cursor-pointer">
							<CloseOutlinedIcon className="text-gray-600" />
						</div>

						<div className="flex flex-col gap-5 mt-10">
							{navLinks.map((item) => (
								<Link key={item.name} to={item.to}>
									<span
										onClick={() => {
											setActive(item.name);
											setIsOpen(false);
										}}
										className={`cursor-pointer capitalize text-lg ${
											active === item.name
												? "font-bold text-blue-700"
												: "text-black"
										}`}>
										{item.name}
									</span>
								</Link>
							))}
						</div>

						<div className="mt-auto flex items-center justify-center">
							<button className="bg-[#DB4444] px-5 py-2 rounded-full text-white text-lg">
								Log In / Sign Up
							</button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default UpBar;
