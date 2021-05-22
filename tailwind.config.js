module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				lg: "10rem",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
