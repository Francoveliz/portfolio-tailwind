import { backgroundColor } from "./assets/utils/theme";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Education from "./sections/education/Education";
import Idiomas from "./sections/Idiomas";
import Portfolio from "./sections/Portfolio";
import Skills from "./sections/skills/Skills";

function App() {
	return (
		<div
			className={`min-h-screen text-gray-600 font-sans ${backgroundColor}`}>
			<Navbar />
			<main className="flex flex-col pb-32 gap-20 ">
				<About />
				<Portfolio />
				<Skills />
				<Education />
				<Idiomas />
			</main>
		</div>
	);
}

export default App;
