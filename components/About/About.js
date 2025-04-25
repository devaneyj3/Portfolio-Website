import React from "react";
import styles from "./about.module.scss"; // Ensure the path is correct based on your project structure
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Download } from "lucide-react";
import SocialNetworks from "../Shared/socialNetworks";

const About = ({ data }) => {
	const { name, bio, phone, social, email, image } = data;
	const profilePic = `/images/${image}`;
	const resume = "/resume.pdf";

	return (
		<section id="about" className={styles.about} aria-labelledby="aboutMe">
			<figure className={styles.profileWrapper}>
				<Image
					className={styles.profilePic}
					src={profilePic}
					alt={`Profile picture of ${name}`}
					width={200}
					height={300}
					priority={true}
				/>
			</figure>
			<div className={styles.content}>
				<div className={styles.aboutMe}>
					<h2 id="aboutMe">About Me</h2>
					<div dangerouslySetInnerHTML={{ __html: bio }} />
					<SocialNetworks />
				</div>
				<section className={styles.contactDetails}>
					<address>
						<div className={styles.phone_detail}>
							<div className={styles.icon}>
								<Phone />
							</div>
							<p className={styles.phone}>{phone}</p>
						</div>
						<div className={styles.email_detail}>
							<div className={styles.icon}>
								<Mail />
							</div>
							<p>
								<Link href="mailto:jordandevaney28@gmail.com">
									jordandevaney28@gmail.com
								</Link>
							</p>
						</div>
					</address>
				</section>
				<div className={styles.download}>
					<Link
						href={resume}
						className={styles.button}
						aria-label="Download Resume"
						target="_blank">
						<i className="fa fa-download" aria-hidden="true"></i>
						<Download />
						Download Resume
					</Link>
				</div>
			</div>
		</section>
	);
};

export default About;
