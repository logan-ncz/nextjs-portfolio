import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

import "../sass/_base.scss";

const siteTitle = "Add a project"

export default function AddProject() {
    return(<div className="addProject">
        <Head>
			<title>{siteTitle}</title>
		</Head>
    
    </div>)
}