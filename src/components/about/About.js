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
		<SectionContainer>
			<div className="p-6 flex flex-col mb-24 gap-24 lg:flex-row lg:items-end">
				<div className="flex flex-col gap-10 ">
					<p className="text-7xl uppercase font-bold tracking-tight">
						Franco <span className="text-purple-500">Veliz</span>
					</p>
					<p className="">
						Técnico en informática, con conocimientos en programación y
						desarrollo front end, desarrollados a través de proyectos
						propios.
					</p>
					<div className="lg:ml-auto">
						<PrimaryButton>Download CV</PrimaryButton>
					</div>
				</div>
				<div className="w-full text-purple-600 flex-grow ">
					<ProfileIlustration />
				</div>
			</div>
		</SectionContainer>
	);
};

export default About;
