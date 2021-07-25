import React, { useState, useEffect } from "react";
import { data } from "./resumeData";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";

const App = () => {
	const [resumeData, setResumeData] = useState(data);

	useEffect(() => {
		setResumeData(data);
	}, []);

	return (
		<div className="App">
			<Header data={resumeData} />
			<About data={resumeData} />
			<Portfolio data={resumeData} />
			<Resume data={resumeData} />
			<Contact data={resumeData} />
			<Footer data={resumeData} />
		</div>
	);
};

export default App;
