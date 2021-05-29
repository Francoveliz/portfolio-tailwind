import React from "react";

import { SectionTitle, EducationItem } from "../../components";
import { EducationIcon } from "../../assets/icons";
import { degrees } from "../../assets/utils/content";

const Education = () => {
	return (
		<section
			id="education"
			className=" py-10 flex flex-col gap-6 container">
			<div className="text-blue-400 mb-10">
				<SectionTitle Svg={EducationIcon} text="Educación" />
			</div>
			<div className="grid lg:grid-cols-2 gap-5">
				{degrees.map(title => (
					<div className="p-5 rounded-lg flex flex-col gap-5 shadow bg-white">
						<EducationItem
							title={title.title}
							organization={title.organization}
							certificate={title.certificate}
							overview={title.overview}
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default Education;
