import { useDispatch } from "react-redux";
import { setOpenPopin, setProjectSelected } from "../../store/reducers";
import Image from "next/image";

import "../../sass/_projectCard.scss";

/**
 * Component used to render a card for a project
 * 
 * @param {Project} Project 
 * @returns 
 */
function ProjectCard({ project }) {

  const dispatch = useDispatch();

  function pushPopinData() {
    dispatch(setProjectSelected(project));
    dispatch(setOpenPopin(true))
  }

  return (
    // <a
    //   href={project.githubpages}
    //   target="_blank"
    //   rel="noreferrer"
    //   id={project.title}
    //   className="project"
    // >
    <div
      id={project.title}
      onClick={() => pushPopinData()}
      className="project_list_card"
    >
      {project.thumbnail ? (
        <Image
          className="project_list_card--Thumbnail"
          src={require("../../assets/projectThumbnails/" + project.thumbnail + ".jpg")}
          alt=""
          width={240}
          height={135}
        />
      ) : (
        <p>Image manquante</p>
      )}
      <p>{project.title}</p>
    </div>
    
  );
}

export default ProjectCard;
