import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const StyledFooter = styled.footer`
	padding: 3.2rem 0 2.5rem;
	background-color: ${(props) => props.theme.colors.darkColor};

	@media ${({ theme }) => theme.mediaQueries.laptop} {
		padding: 3.2rem 3.2rem 2.5rem;
	}

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		padding: 4rem 0 4.3rem;
	}
`;

export const FooterContent = styled.div`
	display: flex;
	align-items: center;

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		flex-direction: column;
		justify-content: space-between;
	}
`;

export const FooterLogoLink = styled.button`
	display: flex;
	align-items: center;
	border: none;
	background: none;
	cursor: pointer;

	&:focus {
		outline: 1px dashed ${(props) => props.theme.colors.primaryColor};
	}
`;

export const FooterMenu = styled.div`
	display: flex;
	align-items: center;
	margin-left: 6.4rem;

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		flex-direction: column;
		margin: 4rem 0 4.8rem;
	}
`;

export const FooterLink = styled(LinkS)`
	font-size: 1.3rem;
	line-height: 1.7rem;
	letter-spacing: 1.5px;
	text-transform: uppercase;
	color: ${(props) => props.theme.colors.whiteColor};
	transition: ${(props) => props.theme.transitions.basic};
	cursor: pointer;

	&:not(:last-child) {
		margin-right: 4.8rem;

		@media ${({ theme }) => theme.mediaQueries.tablet} {
			margin-right: 0;
			margin-bottom: 3.2rem;
		}
	}

	&:hover {
		color: ${(props) => props.theme.colors.secondaryColor};
	}

	&.active {
		color: ${(props) => props.theme.colors.secondaryColor};
	}
`;

export const FooterIcons = styled.div`
	display: flex;
	margin-left: auto;

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		margin-left: 0;
	}
`;
