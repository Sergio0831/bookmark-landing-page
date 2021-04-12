import styled from "styled-components";

export const StyledNavBar = styled.nav`
	padding: 4.8rem 3.3rem 0;

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		padding-top: 4rem;
	}

	@media ${({ theme }) => theme.mediaQueries.mobile} {
		padding: 4.8rem 3.2rem 0;
	}
`;

export const NavContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0 auto;
	width: 100%;
	max-width: 110rem;
`;

export const NavLogo = styled.div`
	z-index: 10;
	display: grid;
	align-items: center;
`;

export const NavMenu = styled.div`
	display: flex;
`;

export const MenuIconContainer = styled.div`
	display: none;
	cursor: pointer;

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		z-index: 10;
		display: block;
	}
`;

export const MenuBody = styled.div`
	@media ${({ theme }) => theme.mediaQueries.tablet} {
		position: fixed;
		left: 0;
		top: 0;
		z-index: ${(props) => (props.isOpen ? "5" : "-5")};
		display: grid;
		overflow-y: auto;
		padding-top: 10.5rem;
		width: 100%;
		height: 100%;
		background-color: rgba(36, 42, 69, 0.95);
		opacity: ${(props) => (props.isOpen ? "100%" : "0")};
		visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
		transition: ${(props) => props.theme.transitions.basic};
		backdrop-filter: blur(3.3rem);
	}
`;

export const MobileSocialIcons = styled.div`
	display: none;

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		display: flex;
		justify-content: center;
	}
`;
