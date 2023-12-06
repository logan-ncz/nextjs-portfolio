import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import About from "./components/About";
import Bio from "../components/Bio";
import Projects from "../components/Projects";

import "../sass/_base.scss";

const siteTitle = "Logan Portfolio with Nextjs";

export default function Home() {
	return (
		<div id="root" className="background">
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<Header />
			<main className="main">
				<Bio />
				{/* <About /> */}
				<Projects />
			</main>
			<Footer />
		</div>
	);
}
