import "../../sass/_projectCard.scss";
import Image from "next/image";
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

  return (
    <div className="project-card" id={project.title} >
      <div className="project-card__top">
        <Image
          className="project-card__img"
          src={require("../../assets/projectThumbnails/" + project.thumbnail + ".jpg")}
          alt=""
          width={240}
          height={135}
        />
          <div className="project-card__hover">
            <p>{project.title}</p>
            <div className="project-card__hover__logos">
              {project.stack.map((logo) => {
                return (
                  <div key={project.title + logo}>
                    <NewLogoStack logo={logo} />
                  </div>
                )
              })}
            </div>
          </div>
      </div>
      <div className="project-card__bottom">
        <a href={project.githubRepository} target="_blank" className=""><FontAwesomeIcon icon={faGithub} /></a>
      </div>
    </div>
  );
}

export default ProjectCard;
