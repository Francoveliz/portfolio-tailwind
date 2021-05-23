import React from "react";
import { PrimaryButton, OutlinedButton } from "../";

const techStack = ["react", "redux", "html"];

const Card = ({ name, description, demoLink, codeLink, tags, img }) => {
	return (
		<div className="p-5 rounded-lg overflow-hidden flex flex-col gap-5 shadow justify-between">
			<div>
				<img className="rounded-lg" src={img} alt={name} />
			</div>
			<div className="text-gray-900 font-semibold flex flex-wrap gap-3 w-full">
				{tags.map(tech => (
					<div className=" py-1 px-2 rounded-lg shadow-sm hover:text-blue-400">
						<p className="inline">{`#${tech}`}</p>
					</div>
				))}
			</div>
			<div className=" flex flex-col gap-5">
				<h3 className="text-gray-700 text-xl font-extrabold text-md capitalize">
					{name}
				</h3>
				<p className="text-sm text-gray-900 ">{description}</p>
			</div>
			<div className="flex gap-2 ">
				<a href={codeLink} target="_blank" rel="noopener noreferrer">
					<OutlinedButton>Code</OutlinedButton>
				</a>
				<a href={demoLink} target="_blank" rel="noopener noreferrer">
					<PrimaryButton>Demo</PrimaryButton>
				</a>
			</div>
		</div>
	);
};

export default Card;
