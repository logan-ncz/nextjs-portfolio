import ProjectCard from "./Projects/ProjectCard.js";
import { projects } from "../data/projects.js";
// import PopinProjectDetail from "./Projects/PopinProjectDetail.js";

import "../sass/_projects.scss";

function Projects() {
  return (
    <section id="projects-list" className="projects">
      <h2>Mes projets</h2>
      <div className="projects-list__content">
        {projects.map((project) => {
          return (<ProjectCard project={project} key={project.id} />);
        })}
      </div>
      {/* <PopinProjectDetail /> */}
    </section>
  );
}

export default Projects;
