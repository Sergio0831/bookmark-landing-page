import React from "react";
import styled from "styled-components";
import { Title, Wrapper } from "../styles/theme/styled-components";

const Contact = () => {
	return (
		<StyledContact>
			<Wrapper width="45rem">
				<ContactSubtitle>35,000+ ALREADY JOINED</ContactSubtitle>
				<Title lh="4rem" color="#fff" mb="3.6rem">
					Stay up-to-date with what we’re doing
				</Title>
				<StyledContactForm>
					<Label htmlFor="email"></Label>
					<Input placeholder="Enter your email address" id="email" />
					<InputButton type="submit">Contact Us</InputButton>
				</StyledContactForm>
			</Wrapper>
		</StyledContact>
	);
};

export default Contact;

const StyledContact = styled.div`
	padding: 5.4rem 0 7.4rem;
	background-color: ${(props) => props.theme.colors.primaryColor};
`;

const ContactSubtitle = styled.p`
	margin-bottom: 2rem;
	font-weight: ${(props) => props.theme.fontWeights.medium};
	font-size: 1.3rem;
	line-height: 4rem;
	letter-spacing: 0.5rem;
	text-align: center;
	color: ${(props) => props.theme.colors.whiteColor};
`;

const StyledContactForm = styled.form`
	margin-top: 2.6rem;
	text-align: center;
`;

const Label = styled.label`
	/* Label */
`;

const Input = styled.input`
	margin-right: 1.6rem;
	outline: none;
	border: none;
	border-radius: 0.5rem;
	padding: 1rem 2rem;
	width: 58%;
	font-family: inherit;
	font-size: 1.4rem;
	line-height: 2.8rem;
	letter-spacing: 0.25px;
	background-color: ${(props) => props.theme.colors.whiteColor};

	&::placeholder {
		font-size: inherit;
		line-height: inherit;
		letter-spacing: 0.25px;
		color: rgba(36, 42, 69, 0.25);
	}
`;

const InputButton = styled.button`
	outline: none;
	border: 2px solid transparent;
	border-radius: 0.5rem;
	padding: 0.8rem 2.2rem;
	box-shadow: 0 8px 8px -4px rgba(73, 93, 207, 0.2);
	font-weight: ${(props) => props.theme.fontWeights.medium};
	font-size: 1.4rem;
	line-height: 2.8rem;
	letter-spacing: 0.25px;
	color: ${(props) => props.theme.colors.whiteColor};
	background-color: ${(props) => props.theme.colors.secondaryColor};
	transition: ${(props) => props.theme.transitions.basic};
	cursor: pointer;

	&:hover {
		border: 2px solid ${(props) => props.theme.colors.secondaryColor};
		box-sizing: border-box;
		color: ${(props) => props.theme.colors.secondaryColor};
		background-color: ${(props) => props.theme.colors.whiteColor};
	}
`;
