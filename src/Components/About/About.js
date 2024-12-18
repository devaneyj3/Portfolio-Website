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
			</figure>
			<div className={styles.content}>
				<div className={styles.aboutMe}>
					<h2 id="aboutMe">About Me</h2>
					<p>{bio}</p>
				</div>
				<section className={styles.contactDetails}>
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
				</section>
				<div className={styles.download}>
					<a
						href={resume}
						className={styles.button}
						download="resume.pdf"
						aria-label="Download Resume">
						<i className="fa fa-download" aria-hidden="true"></i>
						Download Resume
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
