"use client";
import React, { useState } from "react";
import { data } from "../resumeData";

// component imports
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";
import Resume from "../components/Resume/Resume";
import Contact from "../components/Contact/Contact";
import PersonalProjects from "../components/Projects/PersonalProjects/PersonalProjects";
import ClientProjects from "../components/Projects/ClientProjects/ClientProjects";

const App = () => {
	const [resumeData] = useState(data);
	return (
		<main>
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
