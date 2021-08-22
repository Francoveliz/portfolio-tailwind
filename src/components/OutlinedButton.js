import React from "react";

const OutlinedButton = ({ children, ...rest }) => {
	return (
		<button
			className="shadow-sm h-10 px-7 text-blue-400 bg-white rounded-lg ring-2 ring-blue-400 hover:shadow-lg ring-inset  font-semibold"
			{...rest}>
			{children}
		</button>
	);
};

export default OutlinedButton;
