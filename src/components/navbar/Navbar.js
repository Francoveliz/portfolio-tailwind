import React, { useState } from "react";

const Navbar = () => {
	const [menuIsOpen, setMenuIsOpen] = useState("");

	const handleMenuOpen = () =>
		menuIsOpen === "" ? setMenuIsOpen("hidden") : setMenuIsOpen("");

	return (
		<nav className="flex items-center justify-between flex-wrap py-5 bg-gray-800">
			<div className="flex justify-between w-full px-4">
				<div className="flex items-center flex-shrink-0 text-white mr-6 ">
					<span className="font-semibold text-xl tracking-tight">
						Franco Veliz
					</span>
				</div>
				<div className="block lg:hidden " onClick={handleMenuOpen}>
					<button className="flex items-center px-3 py-2 border rounded text-gray-50 border-gray-600 hover:text-white hover:border-gray-200   ">
						<svg
							className="fill-current h-3 w-3"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg">
							<title>Menu</title>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
						</svg>
					</button>
				</div>
			</div>
			<div
				className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto px-4 ${menuIsOpen}`}>
				<div className="text-sm lg:flex-grow">
					<a
						href="#"
						className="block mt-4 lg:inline-block lg:mt-0 text-gray-50 hover:text-white mr-4">
						Docs
					</a>
					<a
						href="#"
						className="block mt-4 lg:inline-block lg:mt-0 text-gray-50 hover:text-white mr-4">
						Examples
					</a>
					<a
						href="#"
						className="block mt-4 lg:inline-block lg:mt-0 text-gray-50 hover:text-white">
						Blog
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
