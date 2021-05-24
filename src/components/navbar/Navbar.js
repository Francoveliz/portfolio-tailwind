import React, { useState } from "react";
import { ReactIcon } from "../../assets/icons";

const Navbar = () => {
	const [menuIsOpen, setMenuIsOpen] = useState("hidden");

	const handleMenuOpen = () =>
		menuIsOpen === "" ? setMenuIsOpen("hidden") : setMenuIsOpen("");

	const LinkComponent = ({ text, link }) => {
		return (
			<a
				href={link}
				className="block my-10 lg:my-0 lg:inline-block lg:mt-0 lg:py-1 lg:px-3">
				{text}
			</a>
		);
	};

	const menuData = [
		{ text: "projects", link: "#projects" },
		{ text: "skills", link: "#skills" },
		{ text: "education", link: "#education" },
	];

	return (
		<nav className="lg:absolute w-screen bg-blue-500 text-white py-4 ">
			<div className=" container flex items-center justify-between flex-wrap lg:relative ">
				<div className="flex justify-between w-full lg:w-auto w-10 ">
					<div className="flex items-center flex-shrink-0 mr-6">
						<span className="font-semibold text-xl tracking-tight">
							FV
						</span>
					</div>
					<div className="block lg:hidden " onClick={handleMenuOpen}>
						<button className="flex items-center px-3 py-2 border rounded border-white">
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
					className={`w-screen flex-grow absolute top-16 left-0 ${menuIsOpen} lg:pb-0 lg:static lg:w-auto lg:flex lg:items-center bg-blue-500 shadow-xl lg:shadow-none `}>
					<div className=" gap-8 lg:pr-0 font-semibold  lg:flex-grow capitalize  lg:flex lg:justify-end container ">
						{menuData.map(data => (
							<div className="hover:underline lg:text-center">
								<LinkComponent text={data.text} link={data.link} />
							</div>
						))}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
