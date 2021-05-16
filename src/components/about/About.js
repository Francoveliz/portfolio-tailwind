import React from "react";
import {
	LinkedinIcon,
	GithubIcon,
	FreecodecampIcon,
} from "../../assets/icons";

const About = () => {
	return (
		<div className="px-4">
			<p className="text-7xl uppercase font-bold tracking-tight	mb-5">
				Franco <p className="text-green-300">Veliz</p>
			</p>
			<p>Argentina - Buenos Aires</p>
			<p>+54 011 6696 9916</p>
			<p>francoleandroveliz@gmail.com</p>
			<div className="my-5 flex gap-5">
				<div className="w-12 bg-gray-800 p-3 rounded-full flex justify-center justify-items-center">
					<LinkedinIcon />
				</div>
				<div className="w-12 bg-gray-800 p-3 rounded-full flex justify-center justify-items-center">
					<GithubIcon />
				</div>
				<div className="w-12 bg-gray-800 p-3 rounded-full flex justify-center justify-items-center">
					<FreecodecampIcon />
				</div>
			</div>
		</div>
	);
};

export default About;
