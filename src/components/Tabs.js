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
				<Content active={active === 0}>
					<ImgContainer>
						<ContentImg src={BookmarkImg} alt="Tab Content Image" />
					</ImgContainer>
					<ContentText>
						<Title textAlign={"left"}>Bookmark in one click</Title>
						<Paragraph mb={"3.2rem"} textAlign={"left"}>
							Organize your bookmarks however you like. Our simple drag-and-drop
							interface gives you complete control over how you manage your
							favourite sites.
						</Paragraph>
						<ButtonContainer>
							<PrimaryButton to="/">More Info</PrimaryButton>
						</ButtonContainer>
					</ContentText>
				</Content>
				<Content active={active === 1}>
					<ImgContainer>
						<ContentImg src={SearchingImg} alt="Tab Content Image" />
					</ImgContainer>
					<ContentText>
						<Title textAlign={"left"}>Intelligent search</Title>
						<Paragraph mb={"3.2rem"} textAlign={"left"}>
							Our powerful search feature will help you find saved sites in no
							time at all. No need to trawl through all of your bookmarks.
						</Paragraph>
						<ButtonContainer>
							<PrimaryButton to="/">More Info</PrimaryButton>
						</ButtonContainer>
					</ContentText>
				</Content>
				<Content active={active === 2}>
					<ImgContainer>
						<ContentImg src={SharingImg} alt="Tab Content Image" />
					</ImgContainer>
					<ContentText>
						<Title textAlign={"left"}>Share your bookmarks</Title>
						<Paragraph mb={"3.2rem"} textAlign={"left"}>
							Easily share your bookmarks and collections with others. Create a
							shareable link that you can send at the click of a button.
						</Paragraph>
						<ButtonContainer>
							<PrimaryButton to="/">More Info</PrimaryButton>
						</ButtonContainer>
					</ContentText>
				</Content>
			</StyledTabs>
		</Wrapper>
	);
};

export default Tabs;
