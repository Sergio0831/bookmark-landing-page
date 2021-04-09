import React from "react";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import { Twitter, Facebook } from "../styles/StyledSocialIcons";

const SocialIcons = () => {
	return (
		<IconContext.Provider value={{ size: "2.4rem" }}>
			<Link
				to={{ pathname: "http://facebook.com" }}
				target="_blank"
				rel="noopener noreferrer"
			>
				<Facebook />
			</Link>
			<Link
				to={{ pathname: "http://twitter.com" }}
				target="_blank"
				rel="noopener noreferrer"
			>
				<Twitter />
			</Link>
		</IconContext.Provider>
	);
};

export default SocialIcons;
