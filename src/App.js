import { Navbar, About, Portfolio, Skills } from "./components";

function App() {
	return (
		<div className="min-h-screen bg-gray-900 text-gray-50 font-mono ">
			<Navbar />
			<div className="py-60">
				<About />
				<Portfolio />
				<Skills />
			</div>
		</div>
	);
}

export default App;
