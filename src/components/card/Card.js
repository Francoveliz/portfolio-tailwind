import React from "react";
import { PrimaryButton, OutlinedButton } from "../";

const techStack = ["react", "redux", "html"];

const Card = () => {
	return (
		<div className="p-4 bg-gray-50 rounded-lg overflow-hidden flex flex-col gap-5">
			<div>
				<img
					className="rounded-lg"
					src="https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_1280.png"
					alt="montaña"
				/>
			</div>
			<div className="text-gray-900 font-semibold flex gap-3">
				{techStack.map(tech => (
					<span className=" py-1 px-2 rounded-lg shadow-sm cursor-pointer hover:shadow">{`#${tech}`}</span>
				))}
			</div>
			<div className=" flex flex-col gap-5">
				<h3 className="text-gray-700 text-xl font-extrabold text-md capitalize">
					rest countries api
				</h3>
				<p className="text-sm text-gray-900 ">
					Bienvenido a la montaña de nepal un maravilloso lugar en el que
					podras escalar y repirar aire limpio, serás acompoañado por
					profesonales en alpinismo.
				</p>
			</div>
			<div className="flex gap-2 ">
				<OutlinedButton>Code</OutlinedButton>
				<PrimaryButton>Demo</PrimaryButton>
			</div>
		</div>
	);
};

export default Card;
