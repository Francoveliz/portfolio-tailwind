import React from "react";

const Container = ({ children, ...rest }) => {
	return (
		<div className="container mx-auto  px-4" {...rest}>
			{children}
		</div>
	);
};

export default Container;
