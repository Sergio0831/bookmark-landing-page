import styled from "styled-components";
import { Paragraph, Wrapper } from "../styles/theme/styled-components";

export const StyledQuestions = styled.section`
	padding: 14rem 0 15rem;

	@media ${({ theme }) => theme.mediaQueries.laptop} {
		padding: 4rem 0 15rem;
	}

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		padding: 11rem 3.2rem;
	}
`;

export const StyledWrapper = styled(Wrapper)`
	max-width: 54rem;
`;

export const StyledParagraph = styled(Paragraph)`
	max-width: 54rem;
	text-align: center;
`;

export const Accordeon = styled.div`
	margin: 5.6rem 0 4.4rem;

	@media ${({ theme }) => theme.mediaQueries.mobile} {
		margin: 5.4rem 0 2.8rem;
	}
`;

export const ButtonContainer = styled.div`
	text-align: center;
`;
