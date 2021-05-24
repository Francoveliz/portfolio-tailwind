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
	SkillsIcon,
} from "../../assets/icons";
import { SkillsIlustration } from "../../assets/ilustrations";
import { SkillIcon, SectionTitle } from "../../components";

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
		<div
			id="skills"
			className="lg:grid flex flex-col grid-cols-1 lg:grid-cols-2 py-10 container ">
			<div className=" col-span-2 text-blue-400 ml-0 mr-auto mb-10">
				<SectionTitle text="Skills" Svg={SkillsIcon} />
			</div>
			<div className="lg:col-start-2  flex flex-col items-center justify-center">
				<div className="flex flex-wrap gap-10 mx-auto">
					{technologyIcons.map(Icon => (
						<div className="bg-white w-20 h-20 p-5 rounded-full flex justify-center items-center shadow hover:shadow-lg">
							<SkillIcon IconComponent={Icon.component} />
						</div>
					))}
				</div>
			</div>
			<div className=" hidden lg:block lg:col-start-1 lg:row-start-2 text-blue-400 w-full lg:pl-0 lg:pr-12 ">
				<SkillsIlustration />
			</div>
		</div>
	);
};

export default Skills;
