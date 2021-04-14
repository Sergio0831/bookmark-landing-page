import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import DottedLine from "../img/bg-dots.svg";
import {
	StyledPricingCard,
	PricingImage,
	DividerContainer,
	Divider,
	StyledTitleSmall,
	StyledParagraphSmall,
	StyledPrimaryButton,
} from "../styles/StyledPricingCard";

const PricingCard = (props) => {
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);

	return (
		<StyledPricingCard data-aos="zoom-in">
			<PricingImage src={props.img} alt="Card Image" />
			<StyledTitleSmall>Add to {props.title}</StyledTitleSmall>
			<StyledParagraphSmall>
				Minimum version {props.version}
			</StyledParagraphSmall>
			<DividerContainer>
				<Divider src={DottedLine} alt="Divider" />
			</DividerContainer>
			<StyledPrimaryButton to="/">Add & Install Extension</StyledPrimaryButton>
		</StyledPricingCard>
	);
};

export default PricingCard;
