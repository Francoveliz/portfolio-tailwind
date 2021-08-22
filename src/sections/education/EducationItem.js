import LinkBlank from "../../components/LinkBlank";

const EducationItem = ({ title, organization, certificate, overview }) => {
	return (
		<article>
			<div
				className={`font-extrabold text-2xl mb-3 capitalize text-blue-400`}>
				{title}
			</div>
			<p className="font-bold text-base  mb-5 ">{organization}</p>
			<ul className="mb-5 ml-5 list-disc">
				{overview && overview.map(bullet => <li>{bullet}</li>)}
			</ul>
			{certificate && (
				<LinkBlank link={certificate} className="text-blue-400 underline">
					Ver el certificado
				</LinkBlank>
			)}
		</article>
	);
};

export default EducationItem;
