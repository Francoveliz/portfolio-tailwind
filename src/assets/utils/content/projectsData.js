import { todoListImg, countriesApiImg, fyloImg } from "../../images";

export const projectsData = [
	{
		img: countriesApiImg,
		name: "Rest countries api",
		description:
			'Integración de la api "REST countries", en la cual se muestran en pantalla todos los países y la posibilidad de acceder a información detallada de cada país.',
		demoLink: "https://react-rest-country-api.netlify.app/",
		codeLink:
			"https://github.com/Francoveliz/REST-Countries-API-with-color-theme-switcher",
		tags: ["React", "Material UI", "Styled components"],
	},
	{
		img: todoListImg,
		name: "Todo list app",
		description:
			"Clásica todo app, la cual te permite, agregar tareas, eliminar tareas, marcarlas como completadas, y filtrarlas según se desee.",
		demoLink: "https://todo-list-fv.netlify.app/",
		codeLink: "https://github.com/Francoveliz/todo-list-react",
		tags: ["React", "Material UI", "SCSS"],
	},
	{
		img: fyloImg,
		name: "Huddle landing page",
		description:
			"Landing page de una empresa ficticia, maquetada con CSS.",
		demoLink:
			"https://fylo-landing-page-with-two-column-layout-fv.netlify.app/",
		codeLink:
			"https://github.com/Francoveliz/Fylo-landing-page-with-two-column-layout",
		tags: ["HTML", "CSS"],
	},
];
