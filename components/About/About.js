import React from "react";
import styles from "./about.module.scss"; // Ensure the path is correct based on your project structure
import Image from "next/image";
import Link from "next/link";

const About = ({ data }) => {
	const { name, bio, phone, email, image } = data;
	const profilePic = `/images/${image}`;
	const resume = "/resume.pdf";

	return (
		<section id="about" className={styles.about} aria-labelledby="aboutMe">
			<figure className={styles.profileWrapper}>
				<Image
					className={styles.profilePic}
					href={profilePic}
					src={profilePic}
					alt={`Profile picture of ${name}`}
					width={200}
					height={300}
				/>
			</figure>
			<div className={styles.content}>
				<div className={styles.aboutMe}>
					<h2 id="aboutMe">About Me</h2>
					<div dangerouslySetInnerHTML={{ __html: bio }} />
				</div>
				<section className={styles.contactDetails}>
					<h2 id="contactDetails">Contact Details</h2>
					<address>
						<p className={styles.address}>
							<span>{name}</span>
							<span>{phone}</span>
							<Link href="mailto:jordandevaney28@gmail.com">
								jordandevaney28@gmail.com
							</Link>
						</p>
					</address>
				</section>
				<div className={styles.download}>
					<Link
						href={resume}
						className={styles.button}
						aria-label="Download Resume"
						target="_blank">
						<i className="fa fa-download" aria-hidden="true"></i>
						Download Resume
					</Link>
				</div>
			</div>
		</section>
	);
};

export default About;
