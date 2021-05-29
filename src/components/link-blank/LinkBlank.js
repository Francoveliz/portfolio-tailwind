import React from "react";

const LinkBlank = ({ children, link, ...rest }) => {
	return (
		<a href={link} target="_blank" rel="noopener noreferrer" {...rest}>
			{children}
		</a>
	);
};

export default LinkBlank;
