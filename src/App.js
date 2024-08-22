import React, { useState } from "react";
import { data } from "./resumeData";

// component imports
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";
import Contact from "./Components/Contact/Contact";
import PersonalProjects from "./Components/Projects/PersonalProjects/PersonalProjects";
import ClientProjects from "./Components/Projects/ClientProjects/ClientProjects";

const App = () => {
	const [resumeData] = useState(data);
	return (
		<main className="App">
			<Header data={resumeData} />
			<About data={resumeData} />
			<PersonalProjects data={resumeData} />
			<ClientProjects data={resumeData} />
			<Resume data={resumeData} />
			<Contact data={resumeData} />
			<Footer data={resumeData} />
		</main>
	);
};

export default App;
