import React from "react";

const TechnologyIcon = ({ IconComponent, name }) => {
	return (
		<div className="rounded bg-gray-50 py-7 px-10 flex justify-items-center items-center ">
			<div className="flex flex-col justify-between w-24 ">
				<div className="w-14 h-14 text-yellow-600 mx-auto mb-6 flex justify-items-center items-center ">
					<IconComponent />
				</div>
				<p className="text-center	text-gray-800 font-bold">{name}</p>
			</div>
		</div>
	);
};

export default TechnologyIcon;
