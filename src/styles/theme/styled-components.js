import styled from "styled-components";

export const Wrapper = styled.div`
	overflow: ${(props) => props.overflow || "unset"};
	margin: 0 auto;
	width: 100%;
	max-width: ${(props) => props.width || "110rem"};
`;

export const Title = styled.h2`
	margin-bottom: 1.6rem;
	font-weight: 500;
	font-size: 3.2rem;
	line-height: 5.2rem;
	letter-spacing: -0.1px;
	text-align: ${(props) => props.textAlign || "center"};

	@media ${({ theme }) => theme.mediaQueries.laptop} {
		font-size: 3rem;
		line-height: 5.4rem;
	}

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		text-align: center;
	}

	@media ${({ theme }) => theme.mediaQueries.mobile} {
		margin-bottom: 0;
		font-size: 2.4rem;
	}
`;

export const TitleSmall = styled.h3`
	margin: ${(props) => props.margin};
	font-weight: 500;
	font-size: 2rem;
	line-height: 2.4rem;
	letter-spacing: 0.25px;
`;

export const Paragraph = styled.p`
	margin-right: auto;
	margin-bottom: ${(props) => props.mb || "0"};
	margin-left: auto;
	max-width: ${(props) => props.width};
	font-size: 1.8rem;
	line-height: 2.8rem;
	text-align: ${(props) => props.textAlign};
	color: rgba(36, 42, 69, 0.5);

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		text-align: center;
	}

	@media ${({ theme }) => theme.mediaQueries.mobile} {
		font-size: 1.5rem;
		line-height: 2.5rem;
		color: rgba(36, 42, 69, 0.5);
	}
`;

export const ParagraphSmall = styled.p`
	margin: ${(props) => props.margin};
	font-size: 1.5rem;
	line-height: 2.8rem;
	color: rgba(36, 42, 69, 0.5);
`;
