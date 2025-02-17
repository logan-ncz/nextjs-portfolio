import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { setOpenPopin } from "../store/reducers";
import LogoStack from "../LogoStack";
import Image from "next/image";

import "../../sass/_popinProjectDetail.scss";

/**
 * Component used to render a popin which contains the detail of project
 *
 * @returns
 */
function PopinProjectDetail() {
	const openPopin = useSelector((state) => state.projectPopin.openPopin);
	const projectSelected = useSelector((state) => state.projectPopin.projectSelected);

	const dispatch = useDispatch();

	function handleClick() {
		console.log("On ferme la popin !");
		dispatch(setOpenPopin(false));
	}

	if (!openPopin) {
		return <div className="projects_popinDetail" data-openpopin="false"></div>;
	}

	return (
		<div className="projects_popinDetail" data-openpopin="true">
			<FontAwesomeIcon icon={faXmark} onClick={handleClick} className="projects_popinDetail_close" />
			<div className="projects_popinDetail_left">
				<Image
					className="projects_popinDetail_left--thumbnail"
					src={require("../../assets/projectThumbnails/" + projectSelected.thumbnail + ".jpg")}
					alt=""
					width={430}
					height={242}
				/>
				<div>
					<LogoStack />
				</div>
			</div>
			<aside>
				<h3>{projectSelected.title}</h3>
				<p>Description du projet à venir !</p>
			</aside>
		</div>
	);
}

export default PopinProjectDetail;
