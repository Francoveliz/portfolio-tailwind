import React from "react";

const EducationItem = ({ title, organization }) => (
	<div className="mb-16">
		<div className="font-extrabold text-2xl mb-3 uppercase">{title}</div>
		<p className="font-bold text-base text-gray-200 mb-5">
			{organization}
		</p>
	</div>
);

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

const Education = () => {
	return (
		<div className="mx-4">
			<h2 className="text-5xl mb-11">Education</h2>
			{titles.map(title => (
				<EducationItem
					title={title.title}
					organization={title.organization}
				/>
			))}
		</div>
	);
};

export default Education;
