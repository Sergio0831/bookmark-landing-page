import React from "react";
import { animateScroll as scroll } from "react-scroll";
import FooterLogo from "../components/FooterLogo";
import SocialIcons from "../components/SocialIcons";
import { Wrapper } from "../styles/theme/styled-components";
import {
	StyledFooter,
	FooterContent,
	FooterLogoLink,
	FooterMenu,
	FooterLink,
	FooterIcons,
} from "../styles/StyledFooter";

const toggleHome = () => {
	scroll.scrollToTop();
};

const Footer = () => {
	return (
		<StyledFooter>
			<Wrapper>
				<FooterContent>
					<FooterLogoLink
						type="button"
						aria-label="alternative for screen readers"
						title="alternative for other users"
						onClick={toggleHome}
					>
						<FooterLogo />
					</FooterLogoLink>
					<FooterMenu>
						<FooterLink to="features" smooth={true} duration={500} spy={true}>
							Features
						</FooterLink>
						<FooterLink to="pricing" smooth={true} duration={500} spy={true}>
							Pricing
						</FooterLink>
						<FooterLink to="contact" smooth={true} duration={500} spy={true}>
							Contact
						</FooterLink>
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
