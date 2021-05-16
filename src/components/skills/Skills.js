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
	Html5Icon,
	Css3Icon,
	JsIcon,
	ReactIcon,
	SassIcon,
	GitIcon,
	BootstrapIcon,
	TailwindIcon,
];

const Skills = () => {
	return (
		<div className="mx-4">
			<p className="text-5xl mb-11">Featured Proyects</p>
			<p>LENGUAJES DE PROGRAMACION Y HERRAMIENTAS</p>
			<div className="flex gap-5 overflow-x-auto">
				{technologyIcons.map(Icon => (
					<TechnologyIcon IconComponent={Icon} />
				))}
			</div>
		</div>
	);
};

export default Skills;
