import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../variables";
import Logo from "./Logo";
import Hamburger from "../img/icon-hamburger.svg";

const NavBar = () => {
	// const [click, setClick] = useState(false);
	// const [scroll, setScroll] = useState(false);

	// const changeNav = () => {
	// 	if (window.scroll >= 80) {
	// 		setScroll(true);
	// 	} else {
	// 		setScroll(false);
	// 	}
	// };

	// useEffect(() => {
	// 	changeNav();
	// 	window.addEventListener("scroll", changeNav);
	// }, []);

	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo>
						<Logo />
					</NavLogo>
					<MobileIcon>
						<img src={Hamburger} alt="Mobile Icon" />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks to="features">Features</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="pricing">Pricing</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="contact">Contact</NavLinks>
						</NavItem>
						<NavItem>
							<BtnLink to="/login">Login</BtnLink>
						</NavItem>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default NavBar;

const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 4.8rem;
	height: 4.6rem;
	background-color: #ccc;

	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`;

const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
	width: 100%;
	max-width: 110rem;
`;

const NavLogo = styled.div`
	display: grid;
	align-items: center;
`;

const MobileIcon = styled.div`
	display: none;
	align-self: center;

	@media screen and (max-width: 768px) {
		display: grid;
	}
`;

const NavMenu = styled.ul`
	display: flex;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const NavItem = styled.li`
	display: grid;
	align-items: center;

	&:not(:last-child) {
		margin-right: 4.8rem;
	}
`;

const NavLinks = styled(Link)`
	font-size: 1.3rem;
	line-height: 1.7rem;
	letter-spacing: 1.5px;
	text-transform: uppercase;
	color: ${colors.darkColor};
	transition: color 0.2s ease;

	&:hover {
		color: ${colors.secondaryColor};
	}

	&.active {
		color: ${colors.secondaryColor};
	}
`;

const BtnLink = styled(Link)`
	border: 2px solid transparent;
	border-radius: 0.5rem;
	padding: 1rem 3rem 0.9rem 3.1rem;
	box-shadow: 0 8px 8px -4px rgba(73, 93, 207, 0.2);
	font-weight: 500;
	font-size: 1.3rem;
	line-height: 1.7rem;
	letter-spacing: 1.5px;
	text-transform: uppercase;
	color: ${colors.whiteColor};
	background: ${colors.secondaryColor};
	transition: all 0.2s ease;

	&:hover {
		border: 2px solid ${colors.secondaryColor};
		color: ${colors.secondaryColor};
		background: transparent;
	}
`;
