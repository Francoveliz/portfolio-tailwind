import React from "react";

const PrimaryButton = ({ children, ...rest }) => {
	return (
		<button
			className="h-10 px-5  text-purple-50 transition-colors duration-150 bg-purple-600 rounded-lg  hover:bg-purple-700"
			{...rest}>
			{children}
		</button>
	);
};

export default PrimaryButton;
