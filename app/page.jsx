import "../sass/_base.scss";
import "../sass/_projects.scss";

import ProjectCard from "../components/ProjectCard.js";
import { projects } from "../data/projects.js";
import Photo from "../assets/photo.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

export default function Home() {
	return (
		<main className="main">
			<section className="mainBio">
				<div className="mainBioContent">
					{/* <div className="mainBioContent_left">
						<Image
							src={Photo}
							className="mainBioContent_left_Photo"
							alt=""
							width={200}
							height={200}
							quality={80}
						/>
					</div> */}
					<div className="mainBioContent_infos">
						<h1>Logan Nochez</h1>
						<h2>Développeur Front-End React.js</h2>
						<p>
							<strong>
								Passionné de développement web, je suis en quête de découverte quotidienne et
								d'apprentissage
							</strong>
						</p>
						<div className="mainSocialLinks">
							<a href="https://github.com/logan-ncz">
								<FontAwesomeIcon icon={faGithub} />
							</a>
							<a href="https://www.linkedin.com/in/logan-ncz/">
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
						</div>
					</div>
				</div>
			</section>
			<section>
				<h2>Front-end Developer</h2>
				<p>
					J'ai d'abord exploré l'univers de l'entrepreunariat après mon Baccalauréat STI2D sans pour autant en
					faire ma vocation finale. J'ai ensuite voulu explorer cette fois le monde du développement web et
					j'en suis arrivé à me former en tant que Développeur Front-End sur React.js.
				</p>
			</section>
			<section id="projects-list" className="projects">
				<h2>Mes projets</h2>
				<div className="projects-list__content">
					{projects.map((project) => {
						return <ProjectCard project={project} key={project.id} />;
					})}
				</div>
			</section>
		</main>
	);
}
