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
	const networks = social.map((network) => {
		return (
			<li key={network.name} className={styles.socialLink}>
				<a href={network.url}>
					<i className={`${network.className} ${styles.icon}`}></i>
				</a>
			</li>
		);
	});

	return (
		<header className={styles.header}>
			<nav className={styles.wrap}>
				<ul className={styles.nav}>
					<li className={styles.current}>
						<a className={styles.smoothscroll} href="#home">
							Home
						</a>
					</li>
					<li>
						<a className={styles.smoothscroll} href="#about">
							About
						</a>
					</li>
					<li>
						<a className={styles.smoothscroll} href="#resume">
							Resume
						</a>
					</li>
					<li>
						<a className={styles.smoothscroll} href="#portfolio">
							Works
						</a>
					</li>
					<li>
						<a className={styles.smoothscroll} href="#contact">
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
					<ul className={styles.social}>{networks}</ul>
				</div>
				<button className={styles.blogBtn}>
					<a href={blog} target="_blank" rel="noopener noreferrer">
						Read My Blog
					</a>
				</button>
			</div>

			<p className={styles.scrolldown}>
				<a className={styles.smoothscroll} href="#about">
					<i className="icon-down-circle"></i>
				</a>
			</p>
		</header>
	);
};

export default Header;
