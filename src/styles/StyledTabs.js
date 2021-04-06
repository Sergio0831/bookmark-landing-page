import styled from "styled-components";

export const StyledTabs = styled.div`
	position: relative;
	margin-top: 7.2rem;

	&::before {
		content: "";
		position: absolute;
		right: 63rem;
		bottom: 0;
		z-index: -1;
		border-radius: 32rem;
		width: 100rem;
		height: 35.2rem;
		background-color: ${(props) => props.theme.colors.primaryColor};

		@media ${({ theme }) => theme.mediaQueries.laptop} {
			right: 50rem;
			bottom: 5rem;
			width: 70rem;
			height: 26rem;
		}

		@media ${({ theme }) => theme.mediaQueries.tablet} {
			bottom: 37rem;
		}

		@media ${({ theme }) => theme.mediaQueries.mobile} {
			right: 4rem;
			bottom: 37rem;
			width: 57.7rem;
			height: 21rem;
		}
	}

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		margin-top: 4rem;
	}
`;

export const Content = styled.div`
	display: ${(props) => (props.active ? "flex" : "none")};
	justify-content: flex-end;
	padding-top: 7rem;
	padding-bottom: 20rem;

	@media ${({ theme }) => theme.mediaQueries.laptop} {
		align-items: center;
		padding-bottom: 15rem;
	}

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		flex-direction: column;
	}

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		padding-bottom: 10rem;
	}
`;

export const ContentText = styled.div`
	max-width: 44.5rem;
	transform: translateY(25%);

	@media ${({ theme }) => theme.mediaQueries.laptop} {
		padding-right: 1rem;
		max-width: 40rem;
		transform: translateY(15%);
	}

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		padding-top: 5.2rem;
		padding-right: 0;
		max-width: 100%;

		@media ${({ theme }) => theme.mediaQueries.mobile} {
			padding-top: 2.5rem;
		}
	}
`;

export const ImgContainer = styled.div`
	position: absolute;
	left: 0;
	top: 12rem;

	@media ${({ theme }) => theme.mediaQueries.laptopL} {
		left: 1rem;
	}

	@media ${({ theme }) => theme.mediaQueries.laptop} {
		left: 1rem;
	}

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		position: unset;
	}
`;

export const ContentImg = styled.img`
	display: block;
	width: 100%;
	height: auto;

	@media ${({ theme }) => theme.mediaQueries.laptop} {
		width: 70%;
	}

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		width: 100%;
	}
`;

export const ButtonContainer = styled.div`
	@media ${({ theme }) => theme.mediaQueries.tablet} {
		margin: 0 auto;
		text-align: center;
	}
`;
