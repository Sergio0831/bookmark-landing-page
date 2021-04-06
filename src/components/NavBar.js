import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import MenuIcon from "./MenuIcon";
import SocialIcons from "./SocialIcons";
import CloseIcon from "./CloseIcon";
import MenuUl from "./MenuList";

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	// const [scroll, setScroll] = useState(false);

	// const changeNav = () => {
	// 	if (window.scroll >= 80) {
	// 		setScroll(true);
	// 	} else {
	// 		setScroll(false);
	// 	}
	// };

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	// useEffect(() => {
	// 	changeNav();
	// 	window.addEventListener("scroll", changeNav);
	// }, []);

	return (
		<>
			<StyledNavBar>
				<NavContainer>
					<NavLogo>
						<Logo mobile={isOpen} />
					</NavLogo>
					<NavMenu>
						<MenuIconContainer onClick={toggleMenu}>
							{!isOpen ? <MenuIcon /> : <CloseIcon />}
						</MenuIconContainer>
						<MenuBody isOpen={isOpen}>
							<MenuUl />
							<MobileSocialIcons>
								<SocialIcons color={"#fff"} />
							</MobileSocialIcons>
						</MenuBody>
					</NavMenu>
				</NavContainer>
			</StyledNavBar>
		</>
	);
};

export default NavBar;

const StyledNavBar = styled.nav`
	padding: 4.8rem 3.3rem 0;

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		padding-top: 4rem;
	}

	@media ${({ theme }) => theme.mediaQueries.mobile} {
		padding: 4.8rem 3.2rem 0;
	}
`;

const NavContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0 auto;
	width: 100%;
	max-width: 110rem;
`;

const NavLogo = styled.div`
	z-index: 10;
	display: grid;
	align-items: center;
`;

const NavMenu = styled.div`
	display: flex;
`;

const MenuIconContainer = styled.div`
	display: none;
	cursor: pointer;

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		z-index: 10;
		display: block;
	}
`;

const MenuBody = styled.div`
	@media ${({ theme }) => theme.mediaQueries.tablet} {
		position: fixed;
		left: 0;
		top: 0;
		z-index: ${({ isOpen }) => (isOpen ? "5" : "-5")};
		display: grid;
		overflow-y: auto;
		padding-top: 10.5rem;
		width: 100%;
		height: 100%;
		background-color: rgba(36, 42, 69, 0.95);
		opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
		visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
		transition: ${(props) => props.theme.transitions.basic};
		backdrop-filter: blur(3.3rem);
	}
`;

const MobileSocialIcons = styled.div`
	display: none;

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		display: flex;
		justify-content: center;
	}
`;
