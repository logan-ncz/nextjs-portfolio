import Head from "next/head";

import "../sass/_base.scss";
// pages/blog.js
import { loadProjects } from '../lib/loadProjects'
import TableProjects from "../components/TableProjects";

const siteTitle = "List of projects on DB";

export default function ProjectsList({ projects }) {

    return(<div className="projectsList">
        <Head>
			<title>{siteTitle}</title>
		</Head>
        <TableProjects projects={projects} />
    </div>)
}
 
// This function runs only on the server side
export async function getStaticProps() {
  // Instead of fetching your `/api` route you can call the same
  // function directly in `getStaticProps`
  const projects = await loadProjects();

  try {
    return { props: { projects } };
  }
  catch (error) {
    console.log(error);
  }
 
  // Props returned will be passed to the page component
  
}