import "./globals.css";
export default function RootLayout({ children }) {
	return (
		<html lang="en" title="Portfolio Website">
			<head>
				<title>Portfolio Website</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta
					name="description"
					content="Professional web developer based in Michigan specializing in React and e-commerce solutions."
				/>
				<link rel="icon" href="/favicon.ico" />
			</head>
			<body>{children}</body>
		</html>
	);
}
