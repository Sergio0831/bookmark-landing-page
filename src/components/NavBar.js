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
							<MenuUl isOpen={isOpen} setIsOpen={setIsOpen} />
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
