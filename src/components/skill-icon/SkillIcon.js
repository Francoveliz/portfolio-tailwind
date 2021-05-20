import React from "react";

const SkillIcon = ({ name, IconComponent }) => {
	return (
		<div className="rounded-full bg-gray-50 py-7 px-10 flex justify-items-center items-center m-3">
			<div className=" rounded-full flex flex-col justify-between w-24 ">
				<div className=" rounded-full w-14 h-14 text-yellow-600 mx-auto mb-6 flex justify-items-center items-center ">
					<IconComponent />
				</div>
				<p className="text-center	text-gray-800 font-bold">{name}</p>
			</div>
		</div>
	);
};

export default SkillIcon;