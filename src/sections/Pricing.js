import React from "react";
import PricingCard from "../components/PricingCard";
import { Title } from "../styles/theme/styled-components";
import Chrome from "../img/logo-chrome.svg";
import Firefox from "../img/logo-firefox.svg";
import Opera from "../img/logo-opera.svg";
import {
	StyledPricing,
	StyledParagraph,
	PricingCards,
} from "../styles/StyledPricing";

const Pricing = () => {
	return (
		<StyledPricing id="pricing">
			<Title>Download the extension</Title>
			<StyledParagraph>
				We’ve got more browsers in the pipeline. Please do let us know if you’ve
				got a favourite you’d like us to prioritize.
			</StyledParagraph>
			<PricingCards>
				<PricingCard img={Chrome} title={"Chrome"} version={"62"} />
				<PricingCard img={Firefox} title={"Firefox"} version={"55"} />
				<PricingCard img={Opera} title={"Opera"} version={"46"} />
			</PricingCards>
		</StyledPricing>
	);
};

export default Pricing;
