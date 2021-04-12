import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import MenuIcon from "./MenuIcon";
import SocialIcons from "./SocialIcons";
import CloseIcon from "./CloseIcon";
import MenuUl from "./MenuList";
import {
	StyledNavBar,
	NavContainer,
	NavLogo,
	NavMenu,
	MenuIconContainer,
	MenuBody,
	MobileSocialIcons,
} from "../styles/StyledNavBar";

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
