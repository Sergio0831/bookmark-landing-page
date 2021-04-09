import React, { useState } from "react";
import BookmarkImg from "../img/illustration-features-tab-1.svg";
import SearchingImg from "../img/illustration-features-tab-2.svg";
import SharingImg from "../img/illustration-features-tab-3.svg";
import { Paragraph, Title, Wrapper } from "../styles/theme/styled-components";
import { PrimaryButton } from "../styles/StyledButton";
import TabList from "./TabList";
import {
	StyledTabs,
	Content,
	ContentText,
	ImgContainer,
	ContentImg,
	ButtonContainer,
} from "../styles/StyledTabs";
import content from "../data/TabsData";

const Tabs = () => {
	const [active, setActive] = useState(0);

	const handleClick = (e) => {
		const index = parseInt(e.target.id, 0);
		if (index !== active) {
			setActive(index);
		}
	};

	return (
		<Wrapper>
			<StyledTabs>
				<TabList onHandleClick={handleClick} active={active} />
				{content.map((item) => {
					return (
						<Content key={item.id} active={active === item.id}>
							<ImgContainer>
								<ContentImg src={item.image} alt={item.title} />
							</ImgContainer>
							<ContentText>
								<Title textAlign={"left"}>{item.title}</Title>
								<Paragraph mb={"3.2rem"} textAlign={"left"}>
									{item.info}
								</Paragraph>
								<ButtonContainer>
									<PrimaryButton to="/">More Info</PrimaryButton>
								</ButtonContainer>
							</ContentText>
						</Content>
					);
				})}
			</StyledTabs>
		</Wrapper>
	);
};

export default Tabs;
