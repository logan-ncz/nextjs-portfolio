import "../sass/_tableProjects.scss";

/**
 * Component used to display the list of projects
 * 
 * @param {object} projects Projects data fetched for display into table
 * 
 * @returns 
 */
export default function TableProjects({ projects }) {
    console.log(projects[0]);

    if(!projects[0]) return (<p>No projects available.</p>)

    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Github Pages</th>
                    <th>Github Repository</th>
                    <th>Thumbnail</th>
                </tr>
            </thead>
            <tbody>
                {projects.map((project) => {
                    return (<tr key={project.id}>
                        <td>{project.id}</td>
                        <td>{project.title}</td>
                        <td>{project.githubpages}</td>
                        <td>{project.githubrepository}</td>
                        <td>{project.thumbnail}</td>
                    </tr>)
                })}
            </tbody>
        </table>
    )
}