import React from "react";
import styles from "./footer.module.scss"; // Ensure the path is correct
import Link from "next/link";
import SocialNetworks from "../Shared/socialNetworks";

const Footer = ({ data }) => {
	const { social } = data;

	// Map social networks to list items
	const networksMap = social.map((network) => (
		<li key={network.name} className={styles.socialLinkItem}>
			<Link
				href={network.url}
				aria-label={`Follow us on ${network.name}`}
				title={`Follow us on ${network.name}`}>
				<i className={network.className} aria-hidden="true"></i>
				<span className="sr-only">{network.name}</span>
			</Link>
		</li>
	));

	return (
		<footer className={styles.footer} aria-label="Footer">
			<div className={styles.row}>
				<div className={styles.columns}>
					<SocialNetworks />
					<ul className={styles.copyRight}>
						<li>&copy; 2021-2025 Jordan Devaney</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
