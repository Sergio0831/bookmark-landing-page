import React, { useState } from "react";
import styled from "styled-components";
import { Paragraph, Title, Wrapper } from "../styles/theme/styled-components";
import data from "../data/QuestionsData";
import Question from "../components/Question";
import { PrimaryButton } from "../styles/StyledButton";

const Questions = () => {
	const [questions] = useState(data);

	return (
		<StyledQuestions>
			<StyledWrapper>
				<Title>Frequently Asked Questions</Title>
				<Paragraph textAlign="center" width="54rem">
					Here are some of our FAQs. If you have any other questions you’d like
					answered please feel free to email us.
				</Paragraph>
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

const StyledQuestions = styled.section`
	padding: 14rem 0 15rem;

	@media ${({ theme }) => theme.mediaQueries.laptop} {
		padding: 4rem 0 15rem;
	}

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		padding: 11rem 3.2rem;
	}
`;

const StyledWrapper = styled(Wrapper)`
	max-width: 54rem;
`;

const Accordeon = styled.div`
	margin: 5.6rem 0 4.4rem;

	@media ${({ theme }) => theme.mediaQueries.mobile} {
		margin: 5.4rem 0 2.8rem;
	}
`;

const ButtonContainer = styled.div`
	text-align: center;
`;
