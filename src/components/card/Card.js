import React from "react";
import { PrimaryButton, OutlinedButton, LinkBlank } from "../";

const techStack = ["react", "redux", "html"];

const Card = ({ name, description, demoLink, codeLink, tags, img }) => {
	return (
		<article className="p-5 rounded-lg overflow-hidden flex flex-col gap-5 shadow justify-between">
			<div>
				<img className="rounded-lg" src={img} alt={name} />
			</div>
			<div className="text-gray-600 font-semibold flex flex-wrap gap-3 w-full">
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
				<p className="text-sm text-gray-600 ">{description}</p>
			</div>
			<div className="flex gap-2 ">
				<LinkBlank link={codeLink}>
					<OutlinedButton>Code</OutlinedButton>
				</LinkBlank>
				<LinkBlank link={demoLink}>
					<PrimaryButton>Demo</PrimaryButton>
				</LinkBlank>
			</div>
		</article>
	);
};

export default Card;
