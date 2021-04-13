import styled from "styled-components";
import { Paragraph } from "../styles/theme/styled-components";

export const StyledPricing = styled.section`
	padding-top: 15rem;

	@media ${({ theme }) => theme.mediaQueries.laptop} {
		padding: 4rem;
	}

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		padding-top: 0;
	}

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		padding: 0 3.2rem;
	}
`;

export const StyledParagraph = styled(Paragraph)`
	max-width: 54rem;
	text-align: center;
`;

export const PricingCards = styled.div`
	display: flex;
	align-items: end;
	justify-content: center;
	margin-top: 5.6rem;

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		flex-direction: column;
	}
`;
