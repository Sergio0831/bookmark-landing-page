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
} from "../styles/StyledHero";
import { PrimaryButton, SecondaryButton } from "../styles/StyledButton";

const Hero = () => {
	return (
		<StyledHero>
			<Wrapper>
				<SectionContent>
					<ContentTextBox>
						<HeadingPrimary>A simple bookmark manager</HeadingPrimary>
						<Paragraph mb={"3.2rem"}>
							A clean and simple interface to organize your favourite websites.
							Open a new browser tab and see your sites load instantly. Try it
							for free.
						</Paragraph>
						<PrimaryButton to="/">Get it on Chrome</PrimaryButton>
						<SecondaryButton to="/">Get it on Firefox</SecondaryButton>
					</ContentTextBox>
					<ImageContainer>
						<ContentImage src={HeroBanner} alt="Hero Image" />
					</ImageContainer>
				</SectionContent>
			</Wrapper>
		</StyledHero>
	);
};

export default Hero;
