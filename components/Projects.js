import "../sass/_projects.scss";
import ProjectCard from "./Projects/ProjectCard.js";
import { projects } from "../data/projects.js";
import { fetchProjectData } from "../lib/data.js";

function Projects() {
  // const projectsData = fetchProjectData();

  // console.log(projectsData);

  return (
    <section id="projects-list" className="projects">
      <h2>Mes projets</h2>
      <div className="projects-list__content">
        {projects.map((project) => {
          return (<ProjectCard project={project} key={project.id} />);
        })}
      </div>
    </section>
  );
}

export default Projects;
