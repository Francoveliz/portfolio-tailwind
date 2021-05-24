import React from "react";

import { SectionTitle } from "../../components";
import { EducationIcon } from "../../assets/icons";

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
		<div
			className={`font-extrabold text-2xl mb-3 capitalize text-blue-400`}>
			{title}
		</div>
		<p className="font-bold text-base  mb-5 ">{organization}</p>
	</div>
);

const Education = () => {
	return (
		<div id="education" className=" py-10 flex flex-col gap-6 container">
			<div className="text-blue-400 mb-10">
				<SectionTitle Svg={EducationIcon} text="Educación" />
			</div>
			<div className="grid lg:grid-cols-2 gap-5">
				{titles.map(title => (
					<div className="p-5 rounded-lg flex flex-col gap-5 shadow bg-white">
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
