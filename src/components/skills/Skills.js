import React from "react";
import {
	Html5Icon,
	Css3Icon,
	JsIcon,
	ReactIcon,
	SassIcon,
	GitIcon,
	BootstrapIcon,
	TailwindIcon,
	CheckIcon,
} from "../../assets/icons";
import { SkillsIlustration } from "../../assets/ilustrations";
import { SkillIcon, SectionContainer } from "../../components";

const technologyIcons = [
	{
		component: Html5Icon,
		name: "HTML 5",
	},
	{
		component: Css3Icon,
		name: "CSS 3",
	},
	{
		component: JsIcon,
		name: "JavaScript",
	},
	{
		component: ReactIcon,
		name: "React",
	},
	{
		component: SassIcon,
		name: "SASS",
	},
	{
		component: GitIcon,
		name: "Git",
	},
	{
		component: BootstrapIcon,
		name: "Bootstrap",
	},
	{
		component: TailwindIcon,
		name: "Tailwind",
	},
];

const Skills = () => {
	return (
		<div className="grid lg:grid-cols-2 gap-16  py-10 container">
			<div className="text-blue-400 w-full lg:pl-0 lg:pr-12 p-3">
				<SkillsIlustration />
			</div>
			<div className="flex flex-col items-center justify-center">
				<h2 className="text-4xl mb-11 text-center">Skills</h2>
				<div className="flex gap-5">
					<div className="grid grid-cols-2 lg:grid-cols-4 wrap gap-10 mx-auto">
						{technologyIcons.map(Icon => (
							<div className="bg-white w-20 h-20 p-5 rounded-full flex justify-center items-center shadow">
								<SkillIcon
									IconComponent={Icon.component}
									name={Icon.name}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
