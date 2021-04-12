import styled from "styled-components";
import { motion } from "framer-motion";
import { Paragraph } from "../styles/theme/styled-components";

export const StyledHero = styled.div`
	position: relative;
	padding-top: 9.8rem;
	padding-bottom: 21rem;

	&::after {
		content: "";
		position: absolute;
		right: -48rem;
		bottom: 0;
		z-index: -1;
		border-radius: 32rem;
		width: 100rem;
		height: 35.2rem;
		background-color: ${(props) => props.theme.colors.primaryColor};

		@media ${({ theme }) => theme.mediaQueries.laptopL} {
			top: 25.6rem;
			height: 26rem;
		}

		@media ${({ theme }) => theme.mediaQueries.laptop} {
			right: -35rem;
			top: 13.6rem;
			width: 70rem;
		}

		@media ${({ theme }) => theme.mediaQueries.mobile} {
			right: -27rem;
			top: 13.6rem;
			width: 57.7rem;
			height: 20rem;
		}
	}

	@media ${({ theme }) => theme.mediaQueries.laptop} {
		padding: 2rem 3.2rem 8rem;
	}
`;

export const SectionContent = styled.div`
	position: relative;
	display: flex;
	align-items: center;

	@media ${({ theme }) => theme.mediaQueries.laptopL} {
		padding: 0 1rem;
	}

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		flex-direction: column-reverse;
	}
`;

export const ContentTextBox = styled(motion.div)`
	width: 50%;
	transform: translateY(9rem);

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		margin-top: 40rem;
		width: 100%;
		text-align: center;
	}

	@media ${({ theme }) => theme.mediaQueries.mobile} {
		margin-top: 27.5rem;
		width: 100%;
	}
`;

export const HeadingPrimary = styled.h1`
	margin-bottom: 2.4rem;
	font-weight: 500;
	font-size: 4.8rem;
	line-height: 5.2rem;
	letter-spacing: -0.15px;
	text-transform: capitalize;

	@media ${({ theme }) => theme.mediaQueries.laptop} {
		margin-bottom: 1.6rem;
		font-size: 3.8rem;
		line-height: 4.2rem;
	}

	@media ${({ theme }) => theme.mediaQueries.mobile} {
		margin-bottom: 1.6rem;
		font-size: 3rem;
	}
`;

export const StyledParagraph = styled(Paragraph)`
	margin-bottom: 3.2rem;
`;

export const ImageContainer = styled.div`
	position: absolute;
	right: -12rem;
	top: 1rem;

	@media ${({ theme }) => theme.mediaQueries.laptop} {
		right: -28rem;
		top: 7rem;
	}

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		right: -10rem;
		top: 6rem;
	}

	@media ${({ theme }) => theme.mediaQueries.mobile} {
		right: 1rem;
		top: 6rem;
	}
`;

export const ContentImage = styled.img`
	display: block;
	height: auto;
	filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));

	@media ${({ theme }) => theme.mediaQueries.laptopL} {
		width: 85%;
	}

	@media ${({ theme }) => theme.mediaQueries.laptop} {
		width: 60%;
	}

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		width: 80%;
	}

	@media ${({ theme }) => theme.mediaQueries.mobile} {
		width: 110%;
	}
`;
