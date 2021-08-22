import React from "react";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";
import { EducationIcon } from "../assets/icons";
import LinkBlank from "../components/LinkBlank";

const Idiomas = () => {
	return (
		<section id="inglés" className="py-10 container">
			<div className="text-blue-400 mb-10">
				<SectionTitle text="Inglés" Svg={EducationIcon} />
			</div>
			<div>
				<p className="text-3xl mb-4">
					<strong className="text-blue-400">C2</strong>{" "}
					<span>Proficient</span>
				</p>
				<p>
					<LinkBlank
						link="https://www.efset.org/cert/oU2fMX"
						className="text-blue-400 underline">
						Ver el certificado
					</LinkBlank>
				</p>
			</div>
		</section>
	);
};

export default Idiomas;
