import "../sass/_logoStack.scss";

import Image from "next/image";

/**
 * Component used to render the logo for the stacks
 * 
 * @returns logo
 */
function NewLogoStack({ logo }) {
       
    return (
        <Image
            key={logo}
            src={require("../assets/logoStack/" + logo + ".svg")}
            className="logoStackImg"
            alt=""
            width={32}
            height={32}
        />
    );
}

export default NewLogoStack;
