import React from "react";
import { IconContext } from "react-icons/lib";
import { Twitter, Facebook } from "../styles/StyledSocialIcons";

const SocialIcons = () => {
	return (
		<IconContext.Provider value={{ size: "2.4rem" }}>
			<Facebook />

			<Twitter />
		</IconContext.Provider>
	);
};

export default SocialIcons;
