import React from "react";
import styles from "./header.module.scss"; // Adjust the path as necessary
import Link from "next/link";

const Header = ({ data }) => {
	const {
		name,
		occupation,
		description,
		social,
		address: { state },
	} = data;

	// Map social networks to list items with accessibility enhancements
	const networks = social.map((network) => (
		<li key={network.name} className={styles.socialLink}>
			<Link
				href={network.url}
				aria-label={`Follow me on ${network.name}`}
				title={`Follow me on ${network.name}`}>
				<i
					className={`${network.className} ${styles.icon}`}
					aria-hidden="true"></i>
				<span className="sr-only">{network.name}</span>
			</Link>
		</li>
	));

	return (
		<header className={styles.header}>
			<nav className={styles.wrap}>
				<ul className={styles.nav}>
					<li className={styles.current}>
						<Link
							className={styles.smoothscroll}
							href="#home"
							aria-label="Go to Home section">
							Home
						</Link>
					</li>
					<li>
						<Link
							className={styles.smoothscroll}
							href="#about"
							aria-label="Go to About section">
							About
						</Link>
					</li>
					<li>
						<Link
							className={styles.smoothscroll}
							href="#resume"
							aria-label="Go to Resume section">
							Resume
						</Link>
					</li>
					<li>
						<Link
							className={styles.smoothscroll}
							href="#portfolio"
							aria-label="Go to Works section">
							Works
						</Link>
					</li>
					<li>
						<Link
							className={styles.smoothscroll}
							href="#contact"
							aria-label="Go to Contact section">
							Contact
						</Link>
					</li>
					<li>
						<Link
							className={styles.smoothscroll}
							href="https://devtuneup.com"
							target="_blank"
							aria-label="Go to my Blog">
							Blog
						</Link>
					</li>
				</ul>
			</nav>

			<div className={styles.banner}>
				<div>
					<h1 className={styles.responsiveHeadline}>I'm {name}</h1>
				</div>
				<div>
					<p className={styles.description}>
						I'm a {state} based <span>{occupation}</span> {description}.
						Learning new technologies and contributing to a team is a giant
						driving force in my career endeavors. My biggest core value is
						growing as a developer.
					</p>
				</div>
				<div>
					<ul className={styles.social}>{networks}</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
