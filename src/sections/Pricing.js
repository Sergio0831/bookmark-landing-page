import React from "react";
import styled from "styled-components";
import PricingCard from "../components/PricingCard";
import { Paragraph, Title } from "../styles/theme/styled-components";
import Chrome from "../img/logo-chrome.svg";
import Firefox from "../img/logo-firefox.svg";
import Opera from "../img/logo-opera.svg";

const Pricing = () => {
	return (
		<StyledPricing>
			<Title>Download the extension</Title>
			<Paragraph textAlign="center" width="54rem">
				We’ve got more browsers in the pipeline. Please do let us know if you’ve
				got a favourite you’d like us to prioritize.
			</Paragraph>
			<PricingCards>
				<PricingCard img={Chrome} title={"Chrome"} version={"62"} />
				<PricingCard img={Firefox} title={"Firefox"} version={"55"} />
				<PricingCard img={Opera} title={"Opera"} version={"46"} />
			</PricingCards>
		</StyledPricing>
	);
};

export default Pricing;

const StyledPricing = styled.section`
	padding-top: 15rem;

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		padding-top: 0;
	}

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		padding: 0 3.2rem;
	}
`;

export const PricingCards = styled.div`
	display: flex;
	align-items: end;
	justify-content: center;
	margin-top: 2.6rem;

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		flex-direction: column;
	}
`;
