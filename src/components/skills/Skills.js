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
			<div className="flex gap-5 overflow-x-auto pb-4  custom-scrollbar slider ">
				<div className="slide-track ">
					{technologyIcons.map(Icon => (
						<div className="slide">
							<TechnologyIcon
								IconComponent={Icon.component}
								name={Icon.name}
							/>
						</div>
					))}
					{technologyIcons.map(Icon => (
						<div className="slide">
							<TechnologyIcon
								IconComponent={Icon.component}
								name={Icon.name}
							/>
						</div>
					))}
				</div>
			</div>
			<div>
				{technologyIcons.map(icon => (
					<p className="flex items-center">
						<div className="text-gray-50 w-4 mr-3 ">
							<CheckIcon />
						</div>

						<p>{icon.name}</p>
					</p>
				))}
			</div>
		</div>
	);
};

export default Skills;
