import React from "react";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";
import { projectsData } from "../assets/utils/content/projectsData";
import { PcIcon } from "../assets/icons";

const Portfolio = () => {
	return (
		<section id="projects" className="py-10 container">
			<div className="text-blue-400 mb-10">
				<SectionTitle text="Proyectos" Svg={PcIcon} />
			</div>
			<div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 mx-auto flex-wrap ">
				{projectsData.map(project => (
					<Card {...project} />
				))}
			</div>
		</section>
	);
};

export default Portfolio;
