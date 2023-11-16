import "../sass/_logoStack.scss";

import Image from "next/image";

/**
 * Component used to render the logo for the stacks
 * 
 * @returns logo
 */
function LogoStack() {
	function importAll(r) {
		return r.keys().map(r);
	}

	const stacks = importAll(
		require.context("../assets/logoStack/", false, /\.svg/)
	);

    const logo = stacks.map((stack) => {
        return (
            <Image
                key={stack}
                src={stack}
                className="logoStackImg"
                alt=""
                width={32}
            />
        );
    })
    
	return logo;
}

export default LogoStack;
