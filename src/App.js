import { Navbar, About, Portfolio, Skills, Education } from "./components";

function App() {
	return (
		<div className="min-h-screen bg-gray-900 text-gray-50 font-mono ">
			<Navbar />
			<div className="pb-60 pt-10">
				<About />
				<Portfolio />
				<Skills />
				<Education />
			</div>
		</div>
	);
}

export default App;
