import React from "react";
import styles from "./ServicesSection.module.scss";
import Link from "next/link";

const ServiceCard = ({ icon, title, description, link }) => {
	return (
		<div className={styles.card}>
			<div className={styles.icon}>{icon}</div>
			<h3>{title}</h3>
			<p>{description}</p>
			<Link href={link} className={styles.link}>
				Learn More →
			</Link>
		</div>
	);
};

export default ServiceCard;
