import React from "react";
import {
	LinkedinIcon,
	GithubIcon,
	FreecodecampIcon,
	EmailIcon,
} from "../assets/icons";
import { ProfileIlustration } from "../assets/ilustrations";
import OutlinedButton from "../components/OutlinedButton";
import LinkBlank from "../components/LinkBlank";
import { Wave } from "../assets/svg";
import { pdfLink } from "../assets/utils/content/pdfLink";

const socialMediaData = [
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

const SocialMediaIcon = ({ Component, link }) => (
	<a href={link} target="_blank" rel="noopener noreferrer">
		<div className="w-12 p-3 rounded-full border hover:shadow-lg">
			<Component />
		</div>
	</a>
);

const About = () => {
	return (
		<header>
			<div className=" bg-blue-500 text-white flex pt-16 lg:pt-10 ">
				<div className=" container  flex flex-col gap-12 lg:flex-row  lg:items-center lg:pt-32">
					<div className="flex flex-col lg:w-7/12">
						<p className="text-6xl uppercase font-bold tracking-tight mb-6 ">
							¡Hola! Soy Franco Veliz
						</p>
						<p className="text-3xl font-semibold mb-8">
							Desarrollador Front End #React
						</p>
						<div className="flex gap-6 mb-14">
							{socialMediaData.map(socialMedia => (
								<SocialMediaIcon
									Component={socialMedia.component}
									link={socialMedia.link}
								/>
							))}
						</div>
						<div className="mb-16 lg:mb-0">
							<LinkBlank link={pdfLink}>
								<OutlinedButton>Download CV</OutlinedButton>
							</LinkBlank>
						</div>
					</div>
					<div className=" text-blue-400 flex-grow w-full lg:w-8/12 ">
						<ProfileIlustration />
					</div>
				</div>
			</div>
			<div className="text-blue-500 -mb-28">
				<Wave />
			</div>
		</header>
	);
};

export default About;
