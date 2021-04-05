import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const StyledMenuList = styled.ul`
	@media ${({ theme }) => theme.mediaQueries.tabletM} {
		display: flex;
		align-items: center;
		padding-right: 0;
	}

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		padding: 0 3.3rem;
	}
`;

export const MenuItem = styled.li`
	@media ${({ theme }) => theme.mediaQueries.tabletM} {
		&:not(:last-child) {
			margin-right: 4.8rem;
		}
	}

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		border-top: 1px solid rgba(255, 255, 255, 0.15);
		padding: 2.5rem 0;
		width: 100%;
		text-align: center;
	}
`;

export const MenuLink = styled(LinkS)`
	font-size: 1.3rem;
	line-height: 1.7rem;
	letter-spacing: 1.5px;
	text-transform: uppercase;
	color: ${(props) => props.theme.colors.darkColor};
	transition: ${(props) => props.theme.transitions.basic};
	cursor: pointer;

	&:hover {
		color: ${(props) => props.theme.colors.secondaryColor};
	}

	&.active {
		color: ${(props) => props.theme.colors.secondaryColor};
	}

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		font-size: 2rem;
		letter-spacing: 2.3px;
		color: ${(props) => props.theme.colors.whiteColor};
	}
`;

export const BtnLink = styled(LinkR)`
	border: 2px solid transparent;
	border-radius: 0.5rem;
	padding: 1rem 3rem 0.9rem 3.1rem;
	box-shadow: 0 8px 8px -4px rgba(73, 93, 207, 0.2);
	font-weight: 500;
	font-size: 1.3rem;
	line-height: 1.7rem;
	letter-spacing: 1.5px;
	text-transform: uppercase;
	color: ${(props) => props.theme.colors.whiteColor};
	background: ${(props) => props.theme.colors.secondaryColor};
	transition: ${(props) => props.theme.transitions.basic};

	&:hover {
		border: 2px solid ${(props) => props.theme.colors.secondaryColor};
		color: ${(props) => props.theme.colors.secondaryColor};
		background: transparent;
	}

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		display: block;
		border: 2px solid ${(props) => props.theme.colors.whiteColor};
		padding: 1.5rem 0;
		font-weight: 500;
		font-size: 2rem;
		line-height: 1.7rem;
		letter-spacing: 2.3px;
		color: ${(props) => props.theme.colors.whiteColor};
		background: transparent;
	}
`;
