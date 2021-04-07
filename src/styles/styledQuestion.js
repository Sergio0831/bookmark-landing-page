import styled from "styled-components";

export const StyledQuestion = styled.article`
	border-bottom: 1px solid rgba(36, 42, 69, 0.75);
	padding: 1rem 2.4rem 1.3rem 0;
	transition: ${(props) => props.theme.transitions.basic};

	:first-child {
		border-top: 1px solid rgba(36, 42, 69, 0.75);

		@media ${({ theme }) => theme.mediaQueries.mobile} {
			border-top: none;
		}
	}

	@media ${({ theme }) => theme.mediaQueries.mobile} {
		padding: 1rem 0 1.2rem;
	}
`;

export const Header = styled.button`
	display: flex;
	align-items: center;
	justify-content: space-between;
	outline: none;
	border: none;
	padding-bottom: 1.3rem;
	width: 100%;
	background-color: transparent;
	transition: ${(props) => props.theme.transitions.basic};
	cursor: pointer;

	@media ${({ theme }) => theme.mediaQueries.mobile} {
		padding-bottom: 1rem;
	}
`;

export const Title = styled.h3`
	font-weight: ${(props) => props.theme.fontWeights.regular};
	font-size: 1.8rem;
	line-height: 3.2rem;
	transition: ${(props) => props.theme.transitions.basic};

	${Header}:hover & {
		color: ${(props) => props.theme.colors.secondaryColor};
	}

	@media ${({ theme }) => theme.mediaQueries.mobile} {
		font-size: 1.5rem;
	}
`;

export const Info = styled.p`
	font-size: 1.6rem;
	line-height: 3.6rem;
	letter-spacing: 0.15px;
	color: rgba(36, 42, 69, 0.75);
	transition: all 0.3s ease;
	transition-delay: 1s;

	@media ${({ theme }) => theme.mediaQueries.mobile} {
		font-size: 1.5rem;
	}
`;
