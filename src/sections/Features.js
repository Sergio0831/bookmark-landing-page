import React from "react";
import Tabs from "../components/Tabs";
import { Title } from "../styles/theme/styled-components";
import { StyledFeatures, StyledParagraph } from "../styles/StyledFeatures";

const Features = () => {
	return (
		<StyledFeatures id="features">
			<Title>Features</Title>
			<StyledParagraph>
				Our aim is to make it quick and easy for you to access your favourite
				websites. Your bookmarks sync between your devices so you can access
				them on the go.
			</StyledParagraph>
			<Tabs />
		</StyledFeatures>
	);
};

export default Features;
