import React from "react";

const SectionTitle = ({ Svg, text }) => {
	return (
		<div className="flex items-center ">
			<div className="w-16 mr-6 shadow p-3 rounded-full bg-white">
				<Svg />
			</div>
			<h3 className="font-bold text-4xl ">{text}</h3>
		</div>
	);
};

export default SectionTitle;
