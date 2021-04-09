import React from "react";
import styled from "styled-components";
import FooterLogo from "../components/FooterLogo";
import Logo from "../components/Logo";
import MenuList from "../components/MenuList";
import SocialIcons from "../components/SocialIcons";
import { MenuLink } from "../styles/StyledMenuList";
import { Wrapper } from "../styles/theme/styled-components";

const Footer = () => {
	return (
		<StyledFooter>
			<Wrapper>
				<FooterContent>
					<FooterLogo />
					<FooterMenu>
						<FooterLink to="features">Features</FooterLink>
						<FooterLink to="pricing">Pricing</FooterLink>
						<FooterLink to="contact">Contact</FooterLink>
					</FooterMenu>
					<FooterIcons>
						<SocialIcons />
					</FooterIcons>
				</FooterContent>
			</Wrapper>
		</StyledFooter>
	);
};

export default Footer;

const StyledFooter = styled.footer`
	padding: 3.2rem 0 2.5rem;
	background-color: ${(props) => props.theme.colors.darkColor};

	@media ${({ theme }) => theme.mediaQueries.laptop} {
		padding: 3.2rem 3.2rem 2.5rem;
	}

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		padding: 4rem 0 4.3rem;
	}
`;

const FooterContent = styled.div`
	display: flex;
	align-items: center;

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		flex-direction: column;
		justify-content: space-between;
	}
`;

const FooterMenu = styled.div`
	display: flex;
	align-items: center;
	margin-left: 6.4rem;

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		flex-direction: column;
		margin: 4rem 0 4.8rem;
	}
`;

const FooterLink = styled.div`
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

const FooterIcons = styled.div`
	display: flex;
	margin-left: auto;

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		margin-left: 0;
	}
`;
