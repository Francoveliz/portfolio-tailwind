/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Container } from "../../components";

const Navbar = () => {
	const [menuIsOpen, setMenuIsOpen] = useState("hidden");

	const handleMenuOpen = () =>
		menuIsOpen === "" ? setMenuIsOpen("hidden") : setMenuIsOpen("");

	return (
		<nav className="lg:absolute w-screen bg-blue-500 text-white py-4">
			<div className=" container flex items-center justify-between flex-wrap lg:relative ">
				<div className="flex justify-between w-full lg:w-auto w-10">
					<div className="flex items-center flex-shrink-0 mr-6">
						<span className="font-semibold text-xl tracking-tight">
							Franco Veliz
						</span>
					</div>
					<div className="block lg:hidden " onClick={handleMenuOpen}>
						<button className="flex items-center px-3 py-2 border rounded  border-gray-600  hover:border-gray-200">
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
					className={`w-screen  flex-grow px-4 absolute top-16 left-0 pb-5 ${menuIsOpen} lg:pb-0 lg:static lg:w-auto lg:flex lg:items-center`}>
					<div className="text-sm lg:flex-grow">
						<a
							href="#"
							className="block mt-4 lg:inline-block lg:mt-0   mr-4">
							Docs
						</a>
						<a
							href="#"
							className="block mt-4 lg:inline-block lg:mt-0   mr-4">
							Docs
						</a>
						<a
							href="#"
							className="block mt-4 lg:inline-block lg:mt-0   mr-4">
							Docs
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
