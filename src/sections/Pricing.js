import React from "react";
import styled from "styled-components";
import { Paragraph, Title } from "../styles/theme/styled-components";

const Pricing = () => {
	return (
		<StyledPricing>
			<Title>Download the extension</Title>
			<Paragraph textAlign="center" width="54rem">
				We’ve got more browsers in the pipeline. Please do let us know if you’ve
				got a favourite you’d like us to prioritize.
			</Paragraph>
		</StyledPricing>
	);
};

export default Pricing;

const StyledPricing = styled.section`
	padding-top: 15rem;
`;
