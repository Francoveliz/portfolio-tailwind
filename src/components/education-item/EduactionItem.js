import React from "react";
import { LinkBlank } from "../../components";

const EduactionItem = ({ title, organization, certificate, overview }) => {
	console.log(typeof overview);
	console.log(overview);
	return (
		<article>
			<div
				className={`font-extrabold text-2xl mb-3 capitalize text-blue-400`}>
				{title}
			</div>
			<p className="font-bold text-base  mb-5 ">{organization}</p>
			<ul className="mb-5">
				{overview && overview.map(bullet => <li>{`• ${bullet}`}</li>)}
			</ul>
			{certificate && (
				<LinkBlank link={certificate} className="text-blue-400 underline">
					Ver el certificado
				</LinkBlank>
			)}
		</article>
	);
};

export default EduactionItem;
