import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Title, Wrapper } from "../styles/theme/styled-components";
import ErrorIcon from "../img/icon-error.svg";

const Contact = () => {
	const [email, setEmail] = useState("");
	const [isValid, setIsValid] = useState(false);
	const [message, setMessage] = useState("");

	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

	const handleChange = (e) => {
		const email = e.target.value;
		setEmail(email);
		if (!regex.test(email)) {
			setMessage("Whoops, make sure it’s an email");
			setIsValid(true);
		} else {
			setIsValid(false);
			setMessage("");
		}
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		if (!regex.test(email)) {
			setMessage("Whoops, make sure it’s an email");
			setIsValid(true);
		} else {
			setIsValid(false);
			setMessage("");
			setEmail("");
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
						<Label htmlFor="email"></Label>
						<Input
							isValid={!isValid}
							value={email}
							onChange={handleChange}
							placeholder="Enter your email address"
							id="email"
						/>
						<ErrorMessage isValid={!isValid}>{message}</ErrorMessage>
					</ValidationContainer>
					<SubmitButton type="submit">Contact Us</SubmitButton>
				</StyledContactForm>
			</Wrapper>
		</StyledContact>
	);
};

export default Contact;

const StyledContact = styled.section`
	padding: 5.4rem 0 7.4rem;
	background-color: ${(props) => props.theme.colors.primaryColor};

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		padding: 6rem 3.2rem 4.8rem;
	}
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

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		width: 100%;
	}
`;

const Label = styled.label`
	/* Label */
`;

const Input = styled.input`
	position: relative;
	z-index: 2;
	outline: none;
	border: ${(props) =>
		props.isValid ? "2px solid transparent" : "2px solid #FA5959"};
	border-top-left-radius: 0.5rem;
	border-top-right-radius: 0.5rem;
	border-bottom-right-radius: ${(props) => (props.isValid ? "0.5rem" : "none")};
	border-bottom-left-radius: ${(props) => (props.isValid ? "0.5rem" : "none")};
	padding: 0.8rem 1.8rem;
	width: 26.5rem;
	font-family: inherit;
	font-size: 1.4rem;
	line-height: 2.8rem;
	letter-spacing: 0.25px;
	background-image: ${(props) =>
		props.isValid ? "none" : `url(${ErrorIcon})`};
	background-position: right 1.6rem top 50%;
	background-repeat: no-repeat;
	background-color: ${(props) => props.theme.colors.whiteColor};

	&::placeholder {
		font-size: inherit;
		line-height: inherit;
		letter-spacing: 0.25px;
		color: rgba(36, 42, 69, 0.25);
	}

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		width: 100%;
		box-sizing: border-box;
	}
`;

const ErrorMessage = styled.p`
	position: absolute;
	left: 0;
	right: 0;
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
	transform: ${(props) =>
		props.isValid ? "translateY(-100%)" : "translateY(0)"};
	transition: ${(props) => props.theme.transitions.basic};
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

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		margin-top: 2.6rem;
		margin-left: 0;
		width: 100%;
	}
`;
