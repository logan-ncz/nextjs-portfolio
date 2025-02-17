import "../styles/global.css";
import "../sass/_layout.scss";

export const metadata = {
	title: "Logan Portfolio with Nextjs",
	description: "Portfolio of Logan, a software engineer",
};

export default function RootLayout({ children }) {
	return (
		<html lang="fr">
			<body>
				<div id="root" className="background">
					<header className="header">
						<ul>
							<li className="headerLogo">
								<a href="#root">Logan</a>
							</li>
							<li>
								<a href="#about">A propos</a>
							</li>
							<li>
								<a href="#projects">Projets</a>
							</li>
						</ul>
					</header>
					{children}
					<footer>
						<p>Copyright 2025 - Logan Nochez</p>
					</footer>
				</div>
			</body>
		</html>
	);
}
