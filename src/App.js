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
		<main className="App" role="main">
			<Header data={resumeData} role="banner" />
			<About data={resumeData} role="region" />
			<PersonalProjects data={resumeData} role="region" />
			<ClientProjects data={resumeData} role="region" />
			<Resume data={resumeData} role="region" />
			<Contact data={resumeData} role="form" />
			<Footer data={resumeData} role="contentinfo" />
		</main>
	);
};

export default App;
