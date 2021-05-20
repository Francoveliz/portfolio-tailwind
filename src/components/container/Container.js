import React from "react";

const Container = ({ children, ...rest }) => {
	return (
		<div className="container mx-auto lg:px-32 px-4" {...rest}>
			{children}
		</div>
	);
};

export default Container;
