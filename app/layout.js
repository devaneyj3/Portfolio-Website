import React from "react";
import "./globals.css";
import Script from "next/script";

import "bootstrap/dist/css/bootstrap.min.css";
// app/layout.tsx
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Nav from "@/components/Nav/nav";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
	title: "Jordan Devaney",
	description:
		"Professional web developer based in Michigan specializing in React and e-commerce solutions.",
	authors: [{ name: "Jordan Devaney", url: "https://jordandevaney.com" }],
	applicationName: "Jordan Devaney",
	creator: "Jordan Devaney",
	metadataBase: new URL("https://jordandevaney.com"),
	alternates: {
		canonical: "https://www.jordandevaney.com/",
	},
	openGraph: {
		title: "Jordan Devaney",
		description: "Software Engineer, Web Developer, AI Enthusiast.",
		url: "https://jordandevaney.com",
		siteName: "Jordan Devaney",
		images: [
			{
				url: "/preview.webp", // Place your OG image in /public
				width: 1200,
				height: 630,
				alt: "Jordan Devaney Portfolio",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Jordan Devaney",
		description:
			"Professional web developer based in Michigan specializing in React and e-commerce solutions.",
		images: ["/preview.webp"],
	},
	robots: {
		index: true,
		follow: true,
	},
	appleWebApp: {
		capable: true,
		title: "Jordan Devaney",
		statusBarStyle: "black-translucent",
	},
	formatDetection: {
		telephone: false,
	},
	other: {
		"google-site-verification": "r0MxxBLMvLdnUJi9uGtmUeIaOLIrLYdndQmv3BpimCI",
	},
};
config.autoAddCss = false;
export const viewport = {
	themeColor: "#0f172a",
	colorScheme: "light",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" title="Portfolio Website">
			<head>
				<title>Portfolio Website</title>
				<link rel="icon" href="/favicon.ico" />
				<Script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-KNK69QV2LM"
				/>
				<Script
					dangerouslySetInnerHTML={{
						__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KNK69QV2LM');
          `,
					}}
				/>
			</head>
			<body>
				<Nav />
				{children}
				<Analytics />
			</body>
		</html>
	);
}
