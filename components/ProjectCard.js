"use client";

import "../sass/_projectCard.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import NewLogoStack from "./NewLogoStack";

/**
 * Component used to render a card for a project
 *
 * @param {Project} Project
 * @returns
 */
export default function ProjectCard({ project }) {
	const { title, thumbnail, githubRepository, stack } = project;

	return (
		<div className="project-card" id={title}>
			<div className="project-card__top">
				<Image
					className="project-card__img"
					src={require("../assets/projectThumbnails/" + thumbnail + ".jpg")}
					alt=""
					width={240}
					height={135}
				/>
				<div className="project-card__hover">
					<p>{title}</p>
					<div className="project-card__hover__logos">
						{stack.map((logo) => {
							return (
								<div key={title + logo}>
									<NewLogoStack logo={logo} />
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<div className="project-card__bottom">
				<a href={githubRepository} target="_blank" className="">
					<FontAwesomeIcon icon={faGithub} />
				</a>
			</div>
		</div>
	);
}
