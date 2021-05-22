import React from "react";

const PrimaryButton = ({ children, ...rest }) => {
	return (
		<button
			className="transition duration-1000 ease-in-out shadow-sm h-10 px-7 text-blue-500 transition-colors bg-white rounded-lg ring-4 ring-blue-400 hover:shadow-lg  font-bold"
			{...rest}>
			{children}
		</button>
	);
};

export default PrimaryButton;
