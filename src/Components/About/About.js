import React from "react";
import resume from "../resume.pdf";
import styles from "./about.module.scss"; // Ensure the path is correct based on your project structure

const About = ({ data }) => {
	const { name, bio, phone, email, image } = data;
	const profilePic = `images/${image}`;

	return (
		<section className={styles.about} aria-labelledby="aboutMe">
			<figure className={styles.profileWrapper}>
				<img
					className={styles.profilePic}
					src={profilePic}
					alt={`Profile picture of ${name}`}
				/>
				<figcaption>{name}</figcaption>
			</figure>
			<div className={styles.content}>
				<h2 id="aboutMe">About Me</h2>
				<p>{bio}</p>
				<h2 id="contactDetails">Contact Details</h2>
				<address>
					<p className={styles.address}>
						<span>{name}</span>
						<br />
						<span>{phone}</span>
						<br />
						<span>{email}</span>
					</p>
				</address>
				<a
					href={resume}
					className={styles.button}
					download="resume.pdf"
					aria-label="Download Resume">
					<i className="fa fa-download" aria-hidden="true"></i>
					Download Resume
				</a>
			</div>
		</section>
	);
};

export default About;
