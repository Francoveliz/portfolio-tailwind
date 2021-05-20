import React from "react";

const OutlinedButton = ({ children, ...rest }) => {
	return (
		<button
			className="h-10 px-7 text-gray-900 transition-colors duration-150 border border-gray-900 rounded-lg hover:border-purple-600 hover:text-purple-600"
			{...rest}>
			{children}
		</button>
	);
};

export default OutlinedButton;
