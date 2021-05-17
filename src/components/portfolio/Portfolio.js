import React from "react";
import { Card } from "../";

const Portfolio = () => {
	return (
		<div className="px-5 py-10 w-full">
			<p className="text-5xl mb-11">Featured Proyects</p>
			<div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 mx-auto flex-wrap ">
				{[1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1].map(el => (
					<div>
						<Card />
					</div>
				))}
			</div>
		</div>
	);
};

export default Portfolio;
