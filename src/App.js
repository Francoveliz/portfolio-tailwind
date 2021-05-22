import { Navbar, About, Portfolio, Skills, Education } from "./components";

function App() {
	return (
		<div className="min-h-screen bg-gray-900 text-gray-50 font-mono ">
			<Navbar />
			<div className="flex flex-col	gap-20 pb-60 pt-10 mx-auto container lg:px-32 px-4">
				<About />
				<Portfolio />
				<Skills />
				<Education />
			</div>
		</div>
	);
}

export default App;
