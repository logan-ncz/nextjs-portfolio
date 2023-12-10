import Head from "next/head";

import "../sass/_base.scss";
// pages/blog.js
import { loadProjects } from '../lib/loadProjects'

const siteTitle = "List of projects on DB";

export default function ProjectsList({ projects }) {

    console.log(projects);

    return(<div className="ProjectsList">
        <Head>
			<title>{siteTitle}</title>
		</Head>
        <table>
            <tbody>
                <th>
                    <td>Id</td>
                    <td>Title</td>
                </th>

                {projects.map((project) => {
                    return (<tr>
                        <td>{project.id}</td>
                        <td>{project.title}</td>
                    </tr>)
                })}
            </tbody>
        </table>
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