import React from "react";
import styles from "./header.module.scss"; // Adjust the path as necessary

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
			<a
				href={network.url}
				aria-label={`Follow me on ${network.name}`}
				title={`Follow me on ${network.name}`}>
				<i
					className={`${network.className} ${styles.icon}`}
					aria-hidden="true"></i>
				<span className="sr-only">{network.name}</span>
			</a>
		</li>
	));

	return (
		<header className={styles.header}>
			<nav className={styles.wrap}>
				<ul className={styles.nav}>
					<li className={styles.current}>
						<a
							className={styles.smoothscroll}
							href="#home"
							aria-label="Go to Home section">
							Home
						</a>
					</li>
					<li>
						<a
							className={styles.smoothscroll}
							href="#about"
							aria-label="Go to About section">
							About
						</a>
					</li>
					<li>
						<a
							className={styles.smoothscroll}
							href="#resume"
							aria-label="Go to Resume section">
							Resume
						</a>
					</li>
					<li>
						<a
							className={styles.smoothscroll}
							href="#portfolio"
							aria-label="Go to Works section">
							Works
						</a>
					</li>
					<li>
						<a
							className={styles.smoothscroll}
							href="#contact"
							aria-label="Go to Contact section">
							Contact
						</a>
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
