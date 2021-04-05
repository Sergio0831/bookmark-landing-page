import React from "react";
import {
	StyledMenuList,
	MenuItem,
	MenuLink,
	BtnLink,
} from "../styles/StyledMenuList";

const MenuList = () => {
	return (
		<StyledMenuList>
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
		</StyledMenuList>
	);
};

export default MenuList;
