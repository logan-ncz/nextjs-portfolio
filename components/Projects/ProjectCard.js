// import { useDispatch } from "react-redux";
// import { setOpenPopin, setProjectSelected } from "../../store/reducers";
import Image from "next/image";

import "../../sass/_projectCard.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import NewLogoStack from "../NewLogoStack";

/**
 * Component used to render a card for a project
 * 
 * @param {Project} Project 
 * @returns 
 */
function ProjectCard({ project }) {
  const [ hover, setHover ] = useState(true);

  // const dispatch = useDispatch();

  // function pushPopinData() {
  //   dispatch(setProjectSelected(project));
  //   dispatch(setOpenPopin(true));
  // }

  return (
    <div className="project-card" id={project.title} >
      <div className="project-card__top" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <Image
          className="project-card__img"
          src={require("../../assets/projectThumbnails/" + project.thumbnail + ".jpg")}
          alt=""
          width={240}
          height={135}
        />
        {hover && (
          <div className="project-card__hover">
            <p>{project.title}</p>
            <div className="project-card__hover__logos">
              {project.stack.map((logo) => {
                return (
                  <NewLogoStack logo={logo} />
                )
              })}
            </div>
          </div>
        )}
      </div>
      <div className="project-card__bottom">
        <Link href={project.githubpages} className=""><FontAwesomeIcon icon={faGithub} /></Link>
      </div>
    </div>
  );
}

export default ProjectCard;
