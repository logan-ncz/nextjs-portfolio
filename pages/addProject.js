import Head from "next/head";
import "../sass/_base.scss";
import "../sass/_addProject.scss";
import FormAddProject from "../components/FormAddProject";

const siteTitle = "Add a project"

export default function AddProject() {
    return(<div className="addProject">
        <Head>
			<title>{siteTitle}</title>
		</Head>

        <FormAddProject />
    </div>)
}