import React from "react";
import styled from "styled-components";
import Tabs from "../components/Tabs";
import { Paragraph, Title } from "../styles/theme/styled-components";

const Features = () => {
	return (
		<StyledFeatures>
			<Title>Features</Title>
			<Paragraph textAlign="center" width="54rem">
				Our aim is to make it quick and easy for you to access your favourite
				websites. Your bookmarks sync between your devices so you can access
				them on the go.
			</Paragraph>
			<Tabs />
		</StyledFeatures>
	);
};

export default Features;

const StyledFeatures = styled.section`
	padding-top: 8rem;

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		padding: 14rem 3.2rem 0;
	}
`;
