import React, { useState } from "react";
import ArrowIcon from "./ArrowIcon";
import {
	StyledQuestion,
	Header,
	Title,
	Info,
	Content,
} from "../styles/styledQuestion";

const Question = ({ title, info }) => {
	const [showInfo, setShowInfo] = useState(false);

	const handleClick = () => {
		setShowInfo(!showInfo);
	};

	return (
		<StyledQuestion>
			<Header onClick={handleClick}>
				<Title>{title}</Title>
				<ArrowIcon showInfo={showInfo} />
			</Header>
			<Content showInfo={showInfo}>
				<Info showInfo={showInfo}>{info}</Info>
			</Content>
		</StyledQuestion>
	);
};

export default Question;
