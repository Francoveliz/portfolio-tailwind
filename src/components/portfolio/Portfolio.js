import React from "react";
import { Card, SectionTitle } from "../";
import { projectsData } from "../../assets/utils/content";
import { PcIcon } from "../../assets/icons";

const Portfolio = () => {
	return (
		<div id="projects" className="py-10 container">
			<div className="text-blue-400 mb-10">
				<SectionTitle text="Proyectos" Svg={PcIcon} />
			</div>
			<div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 mx-auto flex-wrap ">
				{projectsData.map(project => (
					<Card {...project} />
				))}
			</div>
		</div>
	);
};

export default Portfolio;
