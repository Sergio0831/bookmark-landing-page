import React from "react";
import styled from "styled-components";
import { Paragraph, Title } from "../styles/theme/styled-components";

const Questions = () => {
	return (
		<StyledQuestions>
			<Title>Frequently Asked Questions</Title>
			<Paragraph textAlign="center" width="54rem">
				Here are some of our FAQs. If you have any other questions you’d like
				answered please feel free to email us.
			</Paragraph>
		</StyledQuestions>
	);
};

export default Questions;

const StyledQuestions = styled.section`
	padding-top: 13rem;
`;
