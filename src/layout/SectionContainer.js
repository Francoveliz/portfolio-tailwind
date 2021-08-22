import React from "react";

const SectionContainer = ({ children, ...rest }) => {
	return (
		<div className="bg-gray-800 rounded-lg " {...rest}>
			{children}
		</div>
	);
};

export default SectionContainer;
