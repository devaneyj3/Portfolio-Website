import React from "react";
import resume from "../resume.pdf";
import styles from "./about.module.scss"; // Ensure the path is correct based on your project structure

const About = ({ data }) => {
	const { name, bio, phone, email, image } = data;
	let profilepic = "images/" + image;

	return (
		<section className={styles.about}>
			<div className={styles.row}>
				<div className={styles.threeColumns}>
					<img
						className={styles.profilePic}
						src={profilepic}
						alt="Jordan Devaney Pic"
					/>
				</div>
				<div className={styles.nineColumns}>
					<h2>About Me</h2>
					<p>{bio}</p>
					<div className={styles.row}>
						<div className={styles.contactDetails}>
							<h2>Contact Details</h2>
							<p className={styles.address}>
								<span>{name}</span>
								<br />
								<span>{phone}</span>
								<br />
								<span>{email}</span>
							</p>
						</div>
						<div className={styles.download}>
							<p>
								<a
									href={resume}
									className={styles.button}
									download="resume.pdf">
									<i className="fa fa-download"></i>
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
