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
} from "../../assets/icons";
import { TechnologyIcon } from "../../components";

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
		<div className="mx-4 mb-12">
			<h2 className="text-5xl mb-11 ">Skills</h2>
			<div className="flex gap-5 overflow-x-auto pb-4 custom-scrollbar">
				{technologyIcons.map(Icon => (
					<TechnologyIcon
						IconComponent={Icon.component}
						name={Icon.name}
					/>
				))}
			</div>
		</div>
	);
};

export default Skills;
