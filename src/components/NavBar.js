import React, { useState, useEffect } from "react";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import styled from "styled-components";
import { colors, transition } from "../variables";
import Logo from "./Logo";
import { device, font } from "../mixins";
import MenuIcon from "./MenuIcon";
import SocialIcons from "./SocialIcons";
import CloseIcon from "./CloseIcon";

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

	// useEffect(() => {
	// 	changeNav();
	// 	window.addEventListener("scroll", changeNav);
	// }, []);

	return (
		<>
			<Nav>
				<NavContainer>
					<NavLogo>
						<Logo mobile={isOpen} />
					</NavLogo>
					<NavMenu>
						<MenuIconContainer onClick={toggleMenu}>
							{!isOpen ? <MenuIcon /> : <CloseIcon />}
						</MenuIconContainer>
						<MenuBody isOpen={isOpen}>
							<MenuList>
								<MenuItem>
									<MenuLink to="features">Features</MenuLink>
								</MenuItem>
								<MenuItem>
									<MenuLink to="pricing">Pricing</MenuLink>
								</MenuItem>
								<MenuItem>
									<MenuLink to="contact">Contact</MenuLink>
								</MenuItem>
								<MenuItem>
									<BtnLink to="/login">Login</BtnLink>
								</MenuItem>
							</MenuList>
							<MobileSocialIcons>
								<SocialIcons color={"#fff"} />
							</MobileSocialIcons>
						</MenuBody>
					</NavMenu>
				</NavContainer>
			</Nav>
		</>
	);
};

export default NavBar;

const Nav = styled.nav`
	padding: 4.8rem 3.3rem 0;

	@media ${device.tablet} {
		padding-top: 4rem;
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

const NavMenu = styled.ul`
	display: flex;
`;

const MenuIconContainer = styled.div`
	display: none;
	cursor: pointer;

	@media ${device.tablet} {
		z-index: 10;
		display: block;
	}
`;

const MenuBody = styled.div`
	@media ${device.tablet} {
		position: fixed;
		left: 0;
		top: 0;
		z-index: ${({ isOpen }) => (isOpen ? "5" : "-5")};
		display: grid;
		overflow: auto;
		padding-top: 10.5rem;
		width: 100%;
		height: 100%;
		background-color: rgba(36, 42, 69, 0.95);
		opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
		visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
		transition: ${transition.transition};
		backdrop-filter: blur(3.3rem);
	}
`;

const MenuList = styled.ul`
	@media ${device.tabletM} {
		display: flex;
		align-items: center;
		padding-right: 0;
	}

	@media ${device.tablet} {
		padding: 0 3.3rem;
	}
`;

const MenuItem = styled.li`
	@media ${device.tabletM} {
		&:not(:last-child) {
			margin-right: 4.8rem;
		}
	}

	@media ${device.tablet} {
		border-top: 1px solid rgba(255, 255, 255, 0.15);
		padding: 2.5rem 0;
		width: 100%;
		text-align: center;
	}
`;

const MenuLink = styled(LinkS)`
	${font({ size: "1.3rem", height: "1.7rem", spacing: "1.5px" })};

	text-transform: uppercase;
	color: ${colors.darkColor};
	transition: ${transition.transition};
	cursor: pointer;

	&:hover {
		color: ${colors.secondaryColor};
	}

	&.active {
		color: ${colors.secondaryColor};
	}

	@media ${device.tablet} {
		${font({
			color: `${colors.whiteColor}`,
			size: "2rem",
			spacing: "2.3px",
		})};
	}
`;

const BtnLink = styled(LinkR)`
	${font({
		color: `${colors.whiteColor}`,
		size: "1.3rem",
		height: "1.7rem",
		weight: "500",
		spacing: "1.5px",
	})};

	border: 2px solid transparent;
	border-radius: 0.5rem;
	padding: 1rem 3rem 0.9rem 3.1rem;
	box-shadow: 0 8px 8px -4px rgba(73, 93, 207, 0.2);
	text-transform: uppercase;
	background: ${colors.secondaryColor};
	transition: ${transition.transition};

	&:hover {
		border: 2px solid ${colors.secondaryColor};
		color: ${colors.secondaryColor};
		background: transparent;
	}

	@media ${device.tablet} {
		${font({
			color: `${colors.whiteColor}`,
			size: "2rem",
			height: "1.7rem",
			weight: "500",
			spacing: "2.3px",
		})};

		display: block;
		border: 2px solid ${colors.whiteColor};
		padding: 1.5rem 0;
		background: transparent;
	}
`;

const MobileSocialIcons = styled.div`
	display: none;

	@media ${device.tablet} {
		display: flex;
		justify-content: center;
	}
`;
