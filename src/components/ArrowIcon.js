import React from "react";
import { StyledArrowIcon } from "../styles/StyledArrowIcon";

const ArrowIcon = ({ showInfo }) => {
	return (
		<StyledArrowIcon
			style={{ transform: showInfo ? "rotateZ(-180deg)" : "none" }}
			xmlns="http://www.w3.org/2000/svg"
			width="18"
			height="12"
		>
			<path
				fill="none"
				stroke={showInfo ? "#FA5959" : "#5267DF"}
				strokeWidth="3"
				d="M1 1l8 8 8-8"
			/>
		</StyledArrowIcon>
	);
};

export default ArrowIcon;
