import styled from "styled-components";
import { Paragraph } from "../styles/theme/styled-components";

export const StyledFeatures = styled.section`
	padding-top: 8rem;

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		padding: 15rem 3.2rem 0;
	}
`;

export const StyledParagraph = styled(Paragraph)`
	max-width: 54rem;
	text-align: center;
`;
