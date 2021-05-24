import React from "react";

const PrimaryButton = ({ children, ...rest }) => {
	return (
		<button
			className=" shadow-sm h-10 px-7 text-white bg-blue-400 rounded-lg  hover:shadow-lg font-semibold"
			{...rest}>
			{children}
		</button>
	);
};

export default PrimaryButton;
