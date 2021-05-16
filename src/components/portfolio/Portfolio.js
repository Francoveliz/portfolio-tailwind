import React from "react";
import { Card } from "../";

const Portfolio = () => {
	return (
		<div className="px-5 py-10 w-full">
			<p className="text-5xl mb-11">Featured Proyects</p>
			{[1, 1, 1].map(el => (
				<Card />
			))}
		</div>
	);
};

export default Portfolio;
