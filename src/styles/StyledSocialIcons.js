import styled from "styled-components";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export const Twitter = styled(FaTwitter)`
	margin-right: 4rem;
	color: ${(props) => props.theme.colors.whiteColor};
	transition: ${(props) => props.theme.transitions.transition};
	cursor: pointer;

	&:hover {
		color: ${(props) => props.theme.colors.secondaryColor};
	}
`;

export const Facebook = styled(FaFacebook)`
	color: ${(props) => props.theme.colors.whiteColor};
	transition: ${(props) => props.theme.transitions.basic};
	cursor: pointer;

	&:hover {
		color: ${(props) => props.theme.colors.secondaryColor};
	}
`;
