import { Navbar, About, Portfolio, Skills, Education } from "./components";
import { backgroundColor } from "./assets/utils/theme";

function App() {
	return (
		<div
			className={`min-h-screen text-gray-900 font-sans ${backgroundColor}`}>
			<Navbar />
			<div className="flex flex-col pb-60 ">
				<About />
				<Portfolio />
				<Skills />
				<Education />
			</div>
		</div>
	);
}

export default App;
