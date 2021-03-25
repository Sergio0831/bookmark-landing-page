import React from "react";
import styled from "styled-components";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { colors, transition } from "../variables";
import { Link } from "react-router-dom";

const SocialIcons = () => {
	return (
		<IconContext.Provider value={{ size: "2.4rem" }}>
			<Link
				to={{ pathname: "http://twitter.com" }}
				target="_blank"
				rel="noopener noreferrer"
			>
				<Twitter />
			</Link>
			<Link
				to={{ pathname: "http://facebook.com" }}
				target="_blank"
				rel="noopener noreferrer"
			>
				<Facebook />
			</Link>
		</IconContext.Provider>
	);
};

const Twitter = styled(FaTwitter)`
	margin-right: 4rem;
	color: ${colors.whiteColor};
	transition: ${transition.transition};
	cursor: pointer;

	&:hover {
		color: ${colors.secondaryColor};
	}
`;

const Facebook = styled(FaFacebook)`
	color: ${colors.whiteColor};
	transition: ${transition.transition};
	cursor: pointer;

	&:hover {
		color: ${colors.secondaryColor};
	}
`;

export default SocialIcons;
