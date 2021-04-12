import React from "react";
import { Paragraph, Wrapper } from "../styles/theme/styled-components";
import HeroBanner from "../img/illustration-hero.svg";
import {
	StyledHero,
	SectionContent,
	ContentTextBox,
	HeadingPrimary,
	ImageContainer,
	ContentImage,
	StyledParagraph,
} from "../styles/StyledHero";
import { PrimaryButton, SecondaryButton } from "../styles/StyledButton";
import { motion } from "framer-motion";
import { imageHeroVariants, textHeroVariants } from "../animation/variants";

const Hero = () => {
	return (
		<StyledHero>
			<Wrapper>
				<SectionContent>
					<ContentTextBox
						as={motion.div}
						variants={textHeroVariants}
						initial="hidden"
						animate="visible"
					>
						<HeadingPrimary>A simple bookmark manager</HeadingPrimary>
						<StyledParagraph>
							A clean and simple interface to organize your favourite websites.
							Open a new browser tab and see your sites load instantly. Try it
							for free.
						</StyledParagraph>
						<PrimaryButton to="/">Get it on Chrome</PrimaryButton>
						<SecondaryButton to="/">Get it on Firefox</SecondaryButton>
					</ContentTextBox>
					<ImageContainer
						as={motion.div}
						variants={imageHeroVariants}
						initial="hidden"
						animate="visible"
					>
						<ContentImage src={HeroBanner} alt="Hero Image" />
					</ImageContainer>
				</SectionContent>
			</Wrapper>
		</StyledHero>
	);
};

export default Hero;
