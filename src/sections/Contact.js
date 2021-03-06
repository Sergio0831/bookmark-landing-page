import React, { useState } from "react";
import {
	StyledContact,
	ContactSubtitle,
	StyledContactForm,
	ValidationContainer,
	Label,
	Input,
	ErrorMessage,
	SubmitButton,
	StyledWrapper,
	StyledTitle,
} from "../styles/StyledContact";

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
		<StyledContact id="contact">
			<StyledWrapper>
				<ContactSubtitle>35,000+ ALREADY JOINED</ContactSubtitle>
				<StyledTitle>Stay up-to-date with what we’re doing</StyledTitle>
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
			</StyledWrapper>
		</StyledContact>
	);
};

export default Contact;
