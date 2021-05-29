import { todoListImg, countriesApiImg, fyloImg } from "../images";

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

export const pdfLink =
	"https://drive.google.com/file/d/1BVUt_WlCO8f2a7gOJqGUdV_qVIvx8UMo/view?usp=sharing";

export const degrees = [
	{
		title: "Técnico en informática personal y profesional",
		organization: "	Escuela de eduación secundaria tecnica N°4",
		certificate: null,
		overview: null,
	},
	{
		title: "Responsive web design",
		organization: "Freecodecamp.org",
		certificate:
			"https://www.freecodecamp.org/certification/francoveliz/responsive-web-design",
		overview: [
			"Semantic HTML",
			"Flex",
			"Grid",
			"Media queries",
			"Accessibility",
		],
	},
	{
		title: "Javascript algorithms and data structures",
		organization: "Freecodecamp.org",
		certificate:
			"https://www.freecodecamp.org/certification/francoveliz/javascript-algorithms-and-data-structures",
		overview: [
			"ES6",
			"Regular Expressions",
			"Debugging",
			"Data structures",
			"Algorithm scripting",
			"Functional programming",
		],
	},
	{
		title: "Apis and microservices",
		organization: "Freecodecamp.org",
		certificate:
			"https://www.freecodecamp.org/certification/francoveliz/apis-and-microservices",
		overview: ["Node.js", "Express", "MongoDB"],
	},
	{
		title: "Front end libraries",
		organization: "Freecodecamp.org",
		certificate:
			"https://www.freecodecamp.org/certification/francoveliz/front-end-libraries",
		overview: ["React", "Bootstrap", "SASS"],
	},
];
