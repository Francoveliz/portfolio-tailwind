import React from "react";

const TechnologyIcon = ({ IconComponent }) => {
	return (
		<div className="rounded bg-gray-50 p-7 flex justify-items-center items-center	">
			<div className="w-14 text-yellow-600">
				<IconComponent />
			</div>
		</div>
	);
};

export default TechnologyIcon;
