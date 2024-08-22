import React from "react";
import styles from "./footer.module.scss"; // Ensure the path is correct

const Footer = ({ data }) => {
	const { social } = data;

	// Map social networks to list items
	const networksMap = social.map((network) => (
		<li key={network.name} className={styles.socialLinkItem}>
			<a
				href={network.url}
				aria-label={`Follow us on ${network.name}`}
				title={`Follow us on ${network.name}`}>
				<i className={network.className} aria-hidden="true"></i>
				<span className="sr-only">{network.name}</span>
			</a>
		</li>
	));

	return (
		<footer className={styles.footer} role="contentinfo" aria-label="Footer">
			<div className={styles.row}>
				<div className={styles.columns}>
					<ul className={styles.socialLinks} aria-label="Social media links">
						{networksMap}
					</ul>

					<ul
						className={styles.copyRight}
						aria-label="Footer copyright and design credits">
						<li>&copy; 2021 Jordan Devaney</li>
						<li>
							Design by{" "}
							<a
								className={styles.footerLink}
								title="Styleshout"
								href="http://www.styleshout.com/"
								aria-label="Styleshout website">
								Styleshout
							</a>
						</li>
					</ul>
				</div>
				<div className={styles.goTop}>
					<a
						className={styles.smoothscroll}
						title="Back to Top"
						href="#home"
						aria-label="Scroll back to top">
						<i className="icon-up-open" aria-hidden="true"></i>
						<span className="sr-only">Back to Top</span>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
