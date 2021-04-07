import React, { useState } from "react";
import styled from "styled-components";
import ArrowIcon from "./ArrowIcon";
import { StyledQuestion, Header, Title, Info } from "../styles/styledQuestion";

const Question = ({ title, info }) => {
	const [showInfo, setShowInfo] = useState(false);

	return (
		<StyledQuestion>
			<Header onClick={() => setShowInfo(!showInfo)}>
				<Title>{title}</Title>
				<ArrowIcon showInfo={showInfo} />
			</Header>
			{showInfo && <Info showInfo>{info}</Info>}
		</StyledQuestion>
	);
};

export default Question;
