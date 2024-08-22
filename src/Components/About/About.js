import React from "react";
import resume from "../resume.pdf";
import styles from "./about.module.scss"; // Ensure the path is correct based on your project structure

const About = ({ data }) => {
	const { name, bio, phone, email, image } = data;
	const profilePic = `images/${image}`;

	return (
		<section className={styles.about} role="region" aria-label="About Me">
			<article className={styles.row}>
				<div className={styles.threeColumns}>
					<img
						className={styles.profilePic}
						src={profilePic}
						alt={`Profile picture of ${name}`}
					/>
				</div>
				<div className={styles.nineColumns}>
					<h2>About Me</h2>
					<p>{bio}</p>
					<div className={styles.row}>
						<div className={styles.contactDetails}>
							<h2>Contact Details</h2>
							<address>
								<p className={styles.address}>
									<span>{name}</span>
									<br />
									<span>{phone}</span>
									<br />
									<span>{email}</span>
								</p>
							</address>
						</div>
						<div className={styles.download}>
							<p>
								<a
									href={resume}
									className={styles.button}
									download="resume.pdf"
									aria-label="Download Resume">
									<i className="fa fa-download" aria-hidden="true"></i>
									Download Resume
								</a>
							</p>
						</div>
					</div>
				</div>
			</article>
		</section>
	);
};

export default About;
