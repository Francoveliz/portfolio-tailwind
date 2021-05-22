import React from "react";
import { Card, SectionContainer } from "../";

const Portfolio = () => {
	return (
		<div className=" py-10 container">
			<div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 mx-auto flex-wrap ">
				{[1, 1, 1].map(el => (
					<div>
						<Card />
					</div>
				))}
			</div>
		</div>
	);
};

export default Portfolio;
