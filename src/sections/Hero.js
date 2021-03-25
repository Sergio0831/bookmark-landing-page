import React from "react";
import styled from "styled-components";
import { colors, transition } from "../variables";
import { device, font } from "../mixins";
import {
	ButtonPramiry,
	Paragraph,
	Wrapper,
	ButtonSecondary,
} from "../components/styled-components";
import HeroBanner from "../img/illustration-hero.svg";

const Hero = () => {
	return (
		<HeroSection>
			<Wrapper>
				<SectionContent>
					<ContentTextBox>
						<HeadingPrimary>A simple bookmark manager</HeadingPrimary>
						<Paragraph mb={"3.2rem"}>
							A clean and simple interface to organize your favourite websites.
							Open a new browser tab and see your sites load instantly. Try it
							for free.
						</Paragraph>
						<ButtonPramiry>Get it on Chrome</ButtonPramiry>
						<ButtonSecondary>Get it on Firefox</ButtonSecondary>
					</ContentTextBox>
					<ContentImage src={HeroBanner} alt="Hero Image" />
				</SectionContent>
			</Wrapper>
		</HeroSection>
	);
};

export default Hero;

const HeroSection = styled.div`
	position: relative;
	padding-top: 9.8rem;
	padding-bottom: 3.6rem;

	&::after {
		content: "";
		position: absolute;
		right: -50rem;
		bottom: 0;
		z-index: -1;
		border-radius: 32rem;
		width: 100rem;
		height: 35.2rem;
		background-color: ${colors.primaryColor};

		@media ${device.tablet} {
			right: -28rem;
			top: 13.6rem;
			width: 57.7rem;
			height: 20rem;
		}
	}

	@media ${device.tablet} {
		padding: 8rem 3.2rem;
	}

	@media ${device.mobile} {
		padding: 8rem 3.2rem;
	}
`;

const SectionContent = styled.div`
	position: relative;
	display: flex;
	align-items: center;

	@media ${device.tablet} {
		flex-direction: column-reverse;
	}
`;

const ContentTextBox = styled.div`
	width: 50%;

	@media ${device.tablet} {
		margin-top: 5.4rem;
		width: 100%;
		text-align: center;
	}
`;

const HeadingPrimary = styled.h1`
	${font({
		size: "4.8rem",
		height: "5.2rem",
		weight: "500",
		spacing: "-0.15px",
	})};

	margin-bottom: 2.4rem;
	text-transform: capitalize;

	@media ${device.tablet} {
		${font({
			size: "3rem",
			height: "4rem",
			weight: "500",
			spacing: "-0.1px",
		})};

		margin-bottom: 1.6rem;
	}
`;

const ContentImage = styled.img`
	margin-right: -11rem;
	filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));

	@media ${device.tablet} {
		margin-right: 0;
		width: 35rem;
		height: 25rem;
	}
`;
