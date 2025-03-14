import React from "react";

const Account = () => {
	return (
		<div className="w-full flex h-auto flex-col py-[20px] px-[50px] lg:px-[130px]">
			<div className="flex flex-row m-12 justify-between gap-1.5">
				<div>
					<span className="font-semibold text-gray-500">Home</span>/{"  "}
					<span className="font-semibold">My Account</span>
				</div>
				<div>
					Welcome,{" "}
					<span className="text-red-500 mr-[48px]  font-semibold">
						Emmanuel
					</span>
				</div>
			</div>
			<div className="container flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between h-auto mb-10 ">
				<div className="h-full w-full lg:w-[35%] p-10 shadow-sm">
					<div>
						<h1 className="font-semibold">Manage My Account</h1>
						<div className="mx-6 my-2 text-gray-500">
							<p className="text-red-500">My Profile</p>
							<p>Address Book</p>
							<p>My Payment Options</p>
						</div>
					</div>
					<div>
						<h1 className="font-semibold">My Orders</h1>
						<div className="mx-6 my-2 text-gray-500">
							<p>My Returns</p>
							<p>My Cancellations</p>
						</div>
					</div>
					<div>
						<h1 className="font-semibold">My Wishlist</h1>
					</div>
				</div>
				<div className="w-full lg:w-[60%] h-full rounded-md p-10 shadow-sm">
					<h1 className="mb-5 text-red-500 font-semibold">Edit Your Profile</h1>

					<div className="flex w-full flex-wrap gap-4">
						{/* First Name */}
						<div className="flex w-full lg:w-[48%] flex-col">
							<label htmlFor="fname" className="font-semibold">
								First Name
							</label>
							<input
								type="text"
								id="fname"
								className="bg-gray-200 p-3 rounded-md"
								placeholder="Enter first name"
								required
							/>
						</div>

						{/* Last Name */}
						<div className="flex w-full lg:w-[48%] flex-col">
							<label htmlFor="lname" className="font-semibold">
								Last Name
							</label>
							<input
								type="text"
								id="lname"
								className="bg-gray-200 p-3 rounded-md"
								placeholder="Enter last name"
								required
							/>
						</div>

						{/* Email */}
						<div className="flex w-full lg:w-[48%] flex-col ">
							<label htmlFor="email" className="font-semibold">
								Email
							</label>
							<input
								type="email"
								id="email"
								className="bg-gray-200 p-3 rounded-md"
								placeholder="Enter email"
								required
							/>
						</div>

						{/* Address */}
						<div className="flex w-full lg:w-[48%] flex-col ">
							<label htmlFor="address" className="font-semibold">
								Address
							</label>
							<input
								type="text"
								id="address"
								className="bg-gray-200 p-3 rounded-md"
								placeholder="Enter address"
								required
							/>
						</div>
					</div>

					{/* Password Change Section */}
					<div className="mt-4">
						<label className="font-semibold">Password Changes</label>
						<input
							type="password"
							className="bg-gray-200 p-3 w-full rounded-md mt-2"
							placeholder="Current Password"
							required
						/>
						<input
							type="password"
							className="bg-gray-200 p-3 w-full rounded-md mt-2"
							placeholder="New Password"
							required
						/>
						<input
							type="password"
							className="bg-gray-200 p-3 w-full rounded-md mt-2"
							placeholder="Confirm New Password"
							required
						/>
					</div>

					{/* Buttons */}
					<div className="flex justify-end gap-10 mt-6">
						<button className="text-gray-700 bg-gray-200 p-3 rounded-md px-6">
							Cancel
						</button>
						<button className="bg-red-500 hover:bg-red-400 text-white px-5 py-2 rounded-md">
							Save Changes
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Account;
