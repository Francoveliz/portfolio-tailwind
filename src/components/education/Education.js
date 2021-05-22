import React from "react";

import { SectionContainer } from "../";

const titles = [
	{
		title: "Técnico en informática personal y profesional",
		organization: "	Escuela de eduación secundaria tecnica N°4",
	},
	{
		title: "Responsive web design",
		organization: "Freecodecamp.org",
	},
	{
		title: "Javascript algorithms and data structures",
		organization: "Freecodecamp.org",
	},
	{
		title: "Apis and microservices",
		organization: "Freecodecamp.org",
	},
	{
		title: "Front end libraries",
		organization: "Freecodecamp.org",
	},
];

const EducationItem = ({ title, organization }) => (
	<div className="mb-16">
		<div className="font-extrabold text-2xl mb-3 uppercase text-gray-800">
			{title}
		</div>
		<p className="font-bold text-base text-gray-700 mb-5 ">
			{organization}
		</p>
	</div>
);

const Education = () => {
	return (
		<SectionContainer>
			<div className=" px-5 py-8">
				<h2 className="text-4xl mb-11 text-center">Education</h2>
				<div className="grid lg:grid-cols-2 gap-5">
					{titles.map(title => (
						<div className="p-5 bg-gray-50  rounded-lg flex flex-col gap-5">
							<EducationItem
								title={title.title}
								organization={title.organization}
							/>
						</div>
					))}
				</div>
			</div>
		</SectionContainer>
	);
};

export default Education;
