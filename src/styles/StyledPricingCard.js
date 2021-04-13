import styled from "styled-components";
import { ParagraphSmall, TitleSmall } from "../styles/theme/styled-components";
import { PrimaryButton } from "../styles/StyledButton";

export const StyledPricingCard = styled.div`
	border-radius: 1.5rem;
	padding: 5rem 2.4rem 2.4rem;
	max-width: 23rem;
	box-shadow: 0 1rem 2rem -5px rgba(73, 93, 207, 0.2);
	text-align: center;
	background: ${(props) => props.theme.colors.whiteColor};

	&:not(:last-child) {
		margin-right: 3.7rem;

		@media ${({ theme }) => theme.mediaQueries.tablet} {
			margin-right: 0;
		}
	}

	&:nth-child(2) {
		margin-top: 4rem;
	}

	&:nth-child(3) {
		margin-top: 8rem;

		@media ${({ theme }) => theme.mediaQueries.tablet} {
			margin-top: 4rem;
		}
	}

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		align-self: center;
	}
`;

export const StyledTitleSmall = styled(TitleSmall)`
	margin: 3.2rem 0 0.6rem;
`;

export const StyledParagraphSmall = styled(ParagraphSmall)`
	margin: 0 0 3.2rem;
`;

export const PricingImage = styled.img`
	/* pricing image */
`;

export const DividerContainer = styled.div`
	/* container for divider image */
`;

export const Divider = styled.img`
	margin-bottom: 2.4rem;
	width: 100%;
`;

export const StyledPrimaryButton = styled(PrimaryButton)`
	display: block;
`;
