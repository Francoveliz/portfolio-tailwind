import React from "react";
import {
	LinkedinIcon,
	GithubIcon,
	FreecodecampIcon,
	LocationIcon,
	EmailIcon,
} from "../../assets/icons";
import { ProfileIlustration } from "../../assets/ilustrations";
import { PrimaryButton, SectionContainer } from "../../components";
import { Wave } from "../../assets/svg";

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
		<div className="w-12 bg-gray-800 hover:bg-purple-600 p-3 rounded-full flex justify-center justify-items-center">
			<Component />
		</div>
	</a>
);

const About = () => {
	return (
		<div>
			<div className=" bg-blue-500 text-white flex pt-10 lg:pt-0">
				<div className=" container  flex flex-col gap-12 lg:flex-row  lg:items-center  lg:pt-32">
					<div className="flex flex-col  ">
						<p className="text-4xl uppercase font-bold tracking-tight mb-4">
							¡Hola! Soy Franco Veliz
						</p>
						<p className="text-2xl font-semibold mb-10 lg:mb-16">
							Desarrollador Front End
						</p>
						<div className="">
							<PrimaryButton>Download CV</PrimaryButton>
						</div>
					</div>
					<div className="w-full text-blue-400 flex-grow ">
						<ProfileIlustration />
					</div>
				</div>
			</div>
			<div className="text-blue-500">
				<Wave />
			</div>
		</div>
	);
};

export default About;
