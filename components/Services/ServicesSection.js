import React from "react";
import styles from "./ServicesSection.module.scss";
import { Code, Rocket, Search, Smartphone } from "lucide-react"; // Example icons
import ServiceCard from "./ServicesCard";

const services = [
	{
		icon: <Code size={32} />,
		title: "Web Development",
		description: "Modern, responsive websites built for speed and scalability.",
		link: "/services/web-development",
	},
	{
		icon: <Search size={32} />,
		title: "SEO Optimization",
		description:
			"Improve your visibility on search engines with proven strategies.",
		link: "/services/seo",
	},
	{
		icon: <Rocket size={32} />,
		title: "Performance Tuning",
		description:
			"Boost load times and Core Web Vitals for better user experience.",
		link: "/services/performance",
	},
	{
		icon: <Smartphone size={32} />,
		title: "Mobile Optimization",
		description: "Ensure your site works great on all screen sizes.",
		link: "/services/mobile",
	},
];

const ServicesSection = () => {
	return (
		<section id="services" className={styles.services}>
			<h2>My Services</h2>
			<div className={styles.cardGrid}>
				{services.map((service, idx) => (
					<ServiceCard key={idx} {...service} />
				))}
			</div>
		</section>
	);
};

export default ServicesSection;
