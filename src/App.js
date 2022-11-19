import { backgroundColor } from "./assets/utils/theme";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Education from "./sections/education/Education";
import Idiomas from "./sections/Idiomas";
import Portfolio from "./sections/Portfolio";
import Skills from "./sections/skills/Skills";

function App() {
	return (
		// <div
		// 	className={`min-h-screen text-gray-600 font-sans ${backgroundColor}`}>
		// 	<Navbar />
		// 	<main className="flex flex-col gap-20 pb-32 ">
		// 		<About />
		// 		<Portfolio />
		// 		<Skills />
		// 		<Education />
		// 		<Idiomas />
		// 	</main>
		// </div>
		<div className="flex items-center justify-center w-screen h-screen bg-yellow-400">
			<p className="text-4xl text-black">
				Este porfolio se está remodelando, disculpe las molestias.
			</p>
		</div>
	);
}

export default App;
