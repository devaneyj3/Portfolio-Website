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
	const blog = "https://devtuneup.com";

	// Map social networks to list items with accessibility enhancements
	const networks = social.map((network) => (
		<li key={network.name} className={styles.socialLink}>
			<a
				href={network.url}
				aria-label={`Follow us on ${network.name}`}
				title={`Follow us on ${network.name}`}>
				<i
					className={`${network.className} ${styles.icon}`}
					aria-hidden="true"></i>
				<span className="sr-only">{network.name}</span>
			</a>
		</li>
	));

	return (
		<header className={styles.header} role="banner" aria-label="Header">
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
				<div className={styles.bannerText}>
					<h1 className={styles.responsiveHeadline}>I'm {name}.</h1>
					<p className={styles.description}>
						I'm a {state} based <span>{occupation}</span>. {description}.
					</p>
					<hr />
					<ul className={styles.social} aria-label="Social media links">
						{networks}
					</ul>
				</div>
				<a
					href={blog}
					target="_blank"
					rel="noopener noreferrer"
					className={styles.blogBtn}
					role="button"
					aria-label="Read my blog">
					Read My Blog
				</a>
			</div>

			<p className={styles.scrolldown}>
				<a
					className={styles.smoothscroll}
					href="#about"
					aria-label="Scroll down to About section">
					<i className="icon-down-circle" aria-hidden="true"></i>
				</a>
			</p>
		</header>
	);
};

export default Header;
