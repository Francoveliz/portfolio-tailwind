import React from "react";
import {
	LinkedinIcon,
	GithubIcon,
	FreecodecampIcon,
} from "../../assets/icons";

const socialMedia = [
	{
		component: LinkedinIcon,
		link: "https://www.linkedin.com/in/francoveliz/",
	},
	{
		component: GithubIcon,
		link: "https://github.com/Francoveliz",
	},
	{
		component: FreecodecampIcon,
		link: "https://www.freecodecamp.org/francoveliz",
	},
];

const SocialMediaIcons = ({ Component, link }) => (
	<a href={link} target="_blank" rel="noopener noreferrer">
		<div className="w-12 bg-gray-800 hover:bg-green-600 p-3 rounded-full flex justify-center justify-items-center">
			<Component />
		</div>
	</a>
);

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
				{socialMedia.map(Icon => (
					<SocialMediaIcons Component={Icon.component} link={Icon.link} />
				))}
			</div>
		</div>
	);
};

export default About;
