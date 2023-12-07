import Photo from "../assets/photo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

/**
 * Part of the main content, for Bio
 * 
 * @returns 
 */
function Bio() {
	return (
		<section className="mainBio">
			<div className="mainBioContent">
				<div className="mainBioContent_left">
					<Image src={Photo} className="mainBioContent_left_Photo" alt="" width={200} height={200} quality={80} />
				</div>
				<div className="mainBioContent_infos">
					<h1>Logan Nochez--Delacroix</h1>
					<h2>Développeur Front-End React.js</h2>
					<p>
						<strong>
							Passionné de développement web, je suis en quête de
							découverte quotidienne et d'apprentissage
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
	);
}

export default Bio;
