import React from "react";
import resume from "./resume.pdf";

const About = ({ data }) => {
	const { name, bio, phone, email, image } = data;
	let profilepic = "images/" + image;
	return (
		<section id="about">
			<div className="row">
				<div className="three columns">
					<img
						className="profile-pic"
						src={profilepic}
						alt="Jordan Devaney Pic"
					/>
				</div>
				<div className="nine columns main-col">
					<h2>About Me</h2>

					<p>{bio}</p>
					<div className="row">
						<div className="columns contact-details">
							<h2>Contact Details</h2>
							<p className="address">
								<span>{name}</span>
								<br />
								<span>{phone}</span>
								<br />
								<span>{email}</span>
							</p>
						</div>
						<div className="columns download">
							<p>
								<a href={resume} className="button" download="resume.pdf">
									<i className="fa fa-download" />
									Download Resume
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
