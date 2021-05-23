import React from "react";
import { Card } from "../";
import { projectsData } from "../../assets/utils/content";

const Portfolio = () => {
	return (
		<div className=" py-10 container">
			<div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 mx-auto flex-wrap ">
				{projectsData.map(project => (
					<Card {...project} />
				))}
			</div>
		</div>
	);
};

export default Portfolio;
