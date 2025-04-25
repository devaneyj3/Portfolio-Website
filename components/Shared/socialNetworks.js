import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./social.module.scss";
import Link from "next/link";
import { resumeData } from "../../resumeData";

export default function SocialNetworks() {
	return (
		<ul className={styles.socials}>
			{resumeData.social.map((network) => (
				<li key={network.name} className={styles.socialLink}>
					<Link
						href={network.url}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={network.name}>
						<FontAwesomeIcon icon={network.icon} className={styles.icon} beat />
					</Link>
				</li>
			))}
		</ul>
	);
}
