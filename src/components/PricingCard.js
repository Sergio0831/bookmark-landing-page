import React from "react";
import { PrimaryButton } from "../styles/StyledButton";
import { ParagraphSmall, TitleSmall } from "../styles/theme/styled-components";
import DottedLine from "../img/bg-dots.svg";
import {
	StyledPricingCard,
	PricingImage,
	DividerContainer,
	Divider,
} from "../styles/StyledPricingCard";

const PricingCard = (props) => {
	return (
		<StyledPricingCard>
			<PricingImage src={props.img} alt="Card Image" />
			<TitleSmall margin={"3.2rem 0 0.6rem"}>Add to {props.title}</TitleSmall>
			<ParagraphSmall margin={"0 0 3.2rem"}>
				Minimum version {props.version}
			</ParagraphSmall>
			<DividerContainer>
				<Divider src={DottedLine} alt="Divider" />
			</DividerContainer>
			<PrimaryButton to="/" display={"block"}>
				Add & Install Extension
			</PrimaryButton>
		</StyledPricingCard>
	);
};

export default PricingCard;
