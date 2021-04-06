import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const StyledButton = styled(LinkR)`
	outline: none;
	border: 2px solid transparent;
	border-color: transparent;
	border-radius: 0.5rem;
	box-shadow: 0 8px 8px -4px rgba(73, 93, 207, 0.2);
	font-weight: ${(props) => props.theme.fontWeights.medium};
	font-size: 1.4rem;
	line-height: 2.8rem;
	letter-spacing: 0.25px;
	transition: ${(props) => props.theme.transitions.basic};
	cursor: pointer;

	&:hover {
		background: transparent;
	}
`;

export const PrimaryButton = styled(StyledButton)`
	display: ${(props) => props.display};
	padding: ${({ padding }) => padding || "0.8rem 2.2rem"};
	color: ${(props) => props.theme.colors.whiteColor};
	background: ${(props) => props.theme.colors.primaryColor};

	&:hover {
		border: 2px solid ${(props) => props.theme.colors.primaryColor};
		color: ${(props) => props.theme.colors.primaryColor};
	}

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		padding: 0.8rem 1.5rem;
	}

	@media ${({ theme }) => theme.mediaQueries.mobile} {
		padding: 0.8rem 1rem;
	}
`;

export const SecondaryButton = styled(StyledButton)`
	margin-left: 1.6rem;
	padding: 0.8rem 2.2rem;
	color: rgba(36, 42, 69, 0.75);
	background: ${(props) => props.theme.colors.greyColorLight};

	&:hover {
		border: 2px solid rgba(36, 42, 69, 0.75);
		color: rgba(36, 42, 69, 0.75);
	}

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		margin-left: 1.4rem;
		padding: 0.8rem 1.5rem;
	}

	@media ${({ theme }) => theme.mediaQueries.mobile} {
		margin-left: 1rem;
		padding: 0.8rem 1rem;
	}
`;
