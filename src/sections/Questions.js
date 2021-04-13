import React, { useState } from "react";
import { Title } from "../styles/theme/styled-components";
import data from "../data/QuestionsData";
import Question from "../components/Question";
import { PrimaryButton } from "../styles/StyledButton";
import {
	StyledQuestions,
	StyledWrapper,
	StyledParagraph,
	Accordeon,
	ButtonContainer,
} from "../styles/StyledQuestions";

const Questions = () => {
	const [questions] = useState(data);

	return (
		<StyledQuestions>
			<StyledWrapper>
				<Title>Frequently Asked Questions</Title>
				<StyledParagraph>
					Here are some of our FAQs. If you have any other questions you’d like
					answered please feel free to email us.
				</StyledParagraph>
				<Accordeon>
					{questions.map((question) => {
						return <Question key={question.id} {...question} />;
					})}
				</Accordeon>
				<ButtonContainer>
					<PrimaryButton to="/">More Info</PrimaryButton>
				</ButtonContainer>
			</StyledWrapper>
		</StyledQuestions>
	);
};

export default Questions;
