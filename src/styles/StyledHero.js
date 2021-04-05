import styled from "styled-components";

export const StyledHero = styled.div`
	position: relative;
	padding-top: 9.8rem;
	padding-bottom: 3.6rem;

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

		@media ${({ theme }) => theme.mediaQueries.laptop} {
			right: -28rem;
			top: 13.6rem;
			width: 70rem;
			height: 26rem;
		}

		@media ${({ theme }) => theme.mediaQueries.mobile} {
			right: -20rem;
			top: 16.6rem;
			width: 57.7rem;
			height: 25rem;
		}
	}

	@media ${({ theme }) => theme.mediaQueries.laptop} {
		padding: 10rem 3.2rem 0;
	}
`;

export const SectionContent = styled.div`
	position: relative;
	display: flex;
	align-items: center;

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		flex-direction: column-reverse;
	}
`;

export const ContentTextBox = styled.div`
	width: 50%;

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		margin-top: 7.4rem;
		width: 100%;
		text-align: center;
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

	@media ${({ theme }) => theme.mediaQueries.laptop} {
		margin-bottom: 3.6rem;
	}
`;

export const ImageContainer = styled.div`
	margin-right: -11rem;

	@media ${({ theme }) => theme.mediaQueries.laptop} {
		margin-right: 0;
	}
`;

export const ContentImage = styled.img`
	display: block;
	width: 100%;
	height: auto;
	filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));

	@media ${({ theme }) => theme.mediaQueries.laptop} {
		margin-right: 0;
	}

	@media ${({ theme }) => theme.mediaQueries.mobile} {
		width: 107%;
	}
`;
