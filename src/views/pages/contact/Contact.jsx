import React from "react";

const Contact = () => {
	// const navLinks = [
	// 	{ name: Home, to: "/" },
	// 	{ name: Contact, to: "/contact" },
	// ];

	return (
		<div className="overflow-x-hidden ">
			<div className="flex flex-row m-6 ml-[9rem] md:ml-[8rem]  gap-1.5 sm:ml-[2rem]">
				<span className="font-semibold text-gray-500">Home</span>/
				<span className="font-semibold">Contact</span>
			</div>
			<div className="section flex flex-row  justify-between mx-[3rem] mb-10 sm:justify-center  m-auto ">
				<div className="contacts ml-[7rem] md:ml-[4rem]">
					<div className="call">
						<div className="header">
							<p className="flex">
								<i className="pi pi-phone text-white bg-red-500 m-2 rounded-4xl p-3"></i>
								<h1 className="m-2 font-bold">Call To Us</h1>
							</p>
							<p className="m-2">We are available 24/7, 7 days a week</p>
							<p className="m-2">Phone: +1 234 567 890</p>
						</div>
					</div>
					<hr className="text-gray-400 font-semibold my-5" />
					<div className="email">
						<div className="header">
							<p className="flex">
								<i className="pi pi-envelope text-white bg-red-500 m-2 rounded-3xl p-3"></i>
								<h1 className="m-2 font-bold">Write To Us</h1>
							</p>
							<p className="m-2">
								Fill out the form and we will contact you in 24 hours.
							</p>
							<p className="m-2">Email: customer@exclusive.com </p>
							<p className="m-2">Email: support@exclusive.com</p>
						</div>
					</div>
				</div>
				<div className="textbox mx-[3rem] flex-row ">
					<div className="details flex flex-row sm:flex-col  justify-between">
						<input
							type="text"
							className="bg-gray-200 md:w-full sm:w-full outline-0 px-8 py-4 m-1.5 rounded-md "
							placeholder="Your Name*"
							required
						/>
						<input
							type="email"
							className="bg-gray-200 md:w-full sm:w-full outline-0 px-8 py-4 m-1.5 rounded-md "
							placeholder="Your Email*"
							required
						/>
						<input
							type="text"
							className="bg-gray-200 md:w-full sm:w-full outline-0 px-8 py-4 m-1.5 sm:m-0.5 rounded-md "
							placeholder="Your Phone number*"
							required
						/>
					</div>
					<div className="textbox">
						<textarea
							className=" md:w-full sm:w-full bg-gray-200 outline-0 p-2 m-1.5 rounded-md"
							placeholder="Your message"
							cols="100"
							rows="10"></textarea>
					</div>
					<div className="flex flex-row-reverse">
						<div className="button flex justify-center  w-50 bg-red-500 p-2 rounded-md">
							<button className="flex   text-white font-semibold">
								Send Message
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
