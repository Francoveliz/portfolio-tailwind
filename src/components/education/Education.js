import React from "react";

import { SectionContainer } from "../";
import { primaryColor } from "../../assets/utils/theme";

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
	<div className="">
		<div className={`font-extrabold text-2xl mb-3 uppercase `}>
			{title}
		</div>
		<p className="font-bold text-base  mb-5 ">{organization}</p>
	</div>
);

const Education = () => {
	return (
		<div className=" py-8 flex flex-col gap-6 container">
			<h2 className={`text-4xl text-center `}>Education</h2>
			<div className="grid lg:grid-cols-2 gap-5">
				{titles.map(title => (
					<div className="p-5 rounded-lg flex flex-col gap-5 shadow">
						<EducationItem
							title={title.title}
							organization={title.organization}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Education;
