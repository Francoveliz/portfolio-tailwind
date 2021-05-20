import React from "react";
import { Card, SectionContainer } from "../";

const Portfolio = () => {
	return (
		<SectionContainer>
			<div className="p-6 w-full ">
				<div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 mx-auto flex-wrap ">
					{[1, 1, 1].map(el => (
						<div>
							<Card />
						</div>
					))}
				</div>
			</div>
		</SectionContainer>
	);
};

export default Portfolio;
