import React from "react";
import styles from "./footer.module.scss"; // Ensure the path is correct

const Footer = ({ data }) => {
	const { social } = data;
	const networksMap = social.map((network) => (
		<li key={network.name} className={styles.socialLinkItem}>
			<a href={network.url}>
				<i className={network.className}></i>
			</a>
		</li>
	));

	return (
		<footer className={styles.footer}>
			<div className={styles.row}>
				<div className={styles.columns}>
					<ul className={styles.socialLinks}>{networksMap}</ul>

					<ul className={styles.copyRight}>
						<li>&copy; Copyright 2021 Jordan Devaney</li>
						<li>
							Design by{" "}
							<a
								className={styles.footerLink}
								title="Styleshout"
								href="http://www.styleshout.com/">
								Styleshout
							</a>
						</li>
					</ul>
				</div>
				<div className={styles.goTop}>
					<a className={styles.smoothscroll} title="Back to Top" href="#home">
						<i className="icon-up-open"></i>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
