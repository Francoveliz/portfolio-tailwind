import React from "react";

const SkillIcon = ({ name, IconComponent }) => {
	return (
		<div className="w-full">
			<IconComponent />
		</div>
	);
};

export default SkillIcon;
