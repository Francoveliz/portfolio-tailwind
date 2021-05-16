import React from "react";

const Card = () => {
	return (
		<div className="wrapper w-full bg-gray-50 rounded shadow-lg overflow-hidden  mb-11">
			<div>
				<img
					src="https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_1280.png"
					alt="montaña"
				/>
			</div>
			<div className="p-3 space-y-3">
				<h3 className="text-gray-700 font-semibold text-md capitalize">
					rest countries api
				</h3>
				<p className="text-sm text-gray-900 ">
					Bienvenido a la montaña de nepal un maravilloso lugar en el que
					podras escalar y repirar aire limpio, serás acompoañado por
					profesonales en alpinismo.
				</p>
			</div>
			<div className="flex p-3 gap-2">
				<button className="ring-inset ring ring-green-800 text-green-900 w-1/2 flex justify-center py-2 font-semibold transition duration-300 hover:text-green-700 focus:outline-none rounded">
					Code
				</button>
				<button className=" text-gray-50 w-1/2 flex justify-center py-2 font-semibold transition duration-300 hover:text-gray-50 hover:bg-green-700 focus:outline-none bg-green-800 rounded">
					Demo
				</button>
			</div>
		</div>
	);
};

export default Card;
