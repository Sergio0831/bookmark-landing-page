import React from "react";
import {
	StyledMenuList,
	MenuItem,
	MenuLink,
	BtnLink,
} from "../styles/StyledMenuList";

const MenuList = ({ setIsOpen }) => {
	const handleRemoveMenu = () => {
		setIsOpen(false);
	};

	return (
		<StyledMenuList>
			<MenuItem>
				<MenuLink
					onClick={handleRemoveMenu}
					smooth={true}
					duration={500}
					spy={true}
					exact="true"
					to="features"
				>
					Features
				</MenuLink>
			</MenuItem>
			<MenuItem>
				<MenuLink
					onClick={handleRemoveMenu}
					to="pricing"
					smooth={true}
					duration={500}
					spy={true}
					exact="true"
				>
					Pricing
				</MenuLink>
			</MenuItem>
			<MenuItem>
				<MenuLink
					onClick={handleRemoveMenu}
					to="contact"
					smooth={true}
					duration={500}
					spy={true}
					exact="true"
				>
					Contact
				</MenuLink>
			</MenuItem>
			<MenuItem>
				<BtnLink to="/login">Login</BtnLink>
			</MenuItem>
		</StyledMenuList>
	);
};

export default MenuList;
