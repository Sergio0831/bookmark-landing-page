import styled from "styled-components";
import { device, font } from "../mixins";
import { colors, transition } from "../variables";

export const Wrapper = styled.div`
	overflow: ${(props) => props.overflow || "unset"};
	margin: 0 auto;
	width: 100%;
	max-width: ${(props) => props.width || "110rem"};
`;

export const Paragraph = styled.p`
	${font({
		color: "rgba(36, 42, 69, 0.5)",
		size: "1.8rem",
		height: "2.8rem",
		spacing: "0",
	})};

	margin-bottom: ${(props) => props.mb || "0"};

	@media ${device.tablet} {
		${font({
			color: "rgba(36, 42, 69, 0.5)",
			size: "1.5rem",
			height: "2.5rem",
			spacing: "0",
		})};
	}
`;

export const Button = styled.button`
	border-color: transparent;
	border-radius: 5px;
	width: ${(props) => props.width};
	box-shadow: 0 8px 8px -4px rgba(73, 93, 207, 0.2);
	transition: ${transition.transition};
	cursor: pointer;

	&:hover {
		background: ${colors.whiteColor};
	}
`;

export const ButtonPramiry = styled(Button)`
	${font({
		color: colors.whiteColor,
		size: "1.4rem",
		height: "2.8rem",
		weight: "500",
		spacing: "0.8px",
	})};

	padding: ${(props) => props.padding || "0.8rem 2.2rem"};
	background: ${colors.primaryColor};

	&:hover {
		border: 2px solid ${colors.primaryColor};
		color: ${colors.primaryColor};
	}

	@media ${device.tablet} {
		padding: 0.8rem 1.5rem;
	}

	@media ${device.mobile} {
		padding: 0.8rem 1rem;
	}
`;

export const ButtonSecondary = styled(Button)`
	${font({
		color: "rgba(36, 42, 69, 0.75)",
		size: "1.4rem",
		height: "2.8rem",
		weight: "500",
		spacing: "0.8px",
	})};

	margin-left: 1.6rem;
	padding: 0.8rem 2.2rem;
	background: ${colors.greyColorLight};

	&:hover {
		border: 2px solid rgba(36, 42, 69, 0.75);
		color: rgba(36, 42, 69, 0.75);
	}

	@media ${device.tablet} {
		margin-left: 1.4rem;
		padding: 0.8rem 1.5rem;
	}

	@media ${device.mobile} {
		margin-left: 1rem;
		padding: 0.8rem 1rem;
	}
`;
