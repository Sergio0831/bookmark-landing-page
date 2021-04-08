import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Title, Wrapper } from "../styles/theme/styled-components";
import ErrorIcon from "../img/icon-error.svg";

const Contact = () => {
	const [email, setEmail] = useState("");
	const [isValid, setIsValid] = useState(false);
	const [message, setMessage] = useState("");

	const handleChange = (e) => {
		const email = e.target.value;
		setEmail(email);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

		if (!regex.test(email)) {
			setMessage("Whoops, make sure it’s an email");
			setIsValid(false);
		} else {
			setIsValid(true);
			setMessage("");
			setEmail("");
			console.log(email);
		}
	};

	return (
		<StyledContact>
			<Wrapper width="45rem">
				<ContactSubtitle>35,000+ ALREADY JOINED</ContactSubtitle>
				<Title lh="4rem" color="#fff" mb="3.6rem">
					Stay up-to-date with what we’re doing
				</Title>
				<StyledContactForm onSubmit={handleFormSubmit} noValidate>
					<ValidationContainer>
						<Label htmlFor="email">
							<Input
								isValid={!isValid}
								value={email}
								onChange={handleChange}
								placeholder="Enter your email address"
								id="email"
							/>
						</Label>
						<ErrorMessage>{message}</ErrorMessage>
					</ValidationContainer>
					<SubmitButton type="submit">Contact Us</SubmitButton>
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
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	margin-top: 2.6rem;
`;

const ValidationContainer = styled.div`
	position: relative;
`;

const Label = styled.label`
	/* Label */
`;

const Input = styled.input`
	position: relative;
	outline: none;
	border: ${(isValid) =>
		isValid ? "2px solid transparent" : "2px solid #FA5959"};
	border-top-left-radius: 0.5rem;
	border-top-right-radius: 0.5rem;
	padding: 0.8rem 1.8rem;
	width: 26.5rem;
	font-family: inherit;
	font-size: 1.4rem;
	line-height: 2.8rem;
	letter-spacing: 0.25px;
	background-image: url(${ErrorIcon});
	background-position: right 1.6rem top 50%;
	background-repeat: no-repeat;
	background-color: ${(props) => props.theme.colors.whiteColor};

	&::placeholder {
		font-size: inherit;
		line-height: inherit;
		letter-spacing: 0.25px;
		color: rgba(36, 42, 69, 0.25);
	}
`;

const ErrorMessage = styled.p`
	border-bottom-right-radius: 0.5rem;
	border-bottom-left-radius: 0.5rem;
	padding: 4px 0 6px 1.2rem;
	font-weight: ${(props) => props.theme.fontWeights.medium};
	font-style: italic;
	font-size: 1rem;
	line-height: 1.2rem;
	letter-spacing: 0.25px;
	color: ${(props) => props.theme.colors.whiteColor};
	background-color: ${(props) => props.theme.colors.secondaryColor};
`;

const SubmitButton = styled.button`
	align-self: flex-start;
	margin-left: auto;
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
