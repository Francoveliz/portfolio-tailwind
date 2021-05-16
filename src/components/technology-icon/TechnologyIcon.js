import React from "react";

const TechnologyIcon = ({ IconComponent, name }) => {
	return (
		<div className="rounded bg-gray-50 py-7 px-10 flex justify-items-center items-center border-4">
			<div className="flex flex-col justify-items-end	mt-auto mb-0">
				<div className="w-14 text-yellow-600 mx-auto mb-3">
					<IconComponent />
				</div>
				<p className="text-center	text-gray-800 font-semibold">{name}</p>
			</div>
		</div>
	);
};

export default TechnologyIcon;
