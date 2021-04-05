import React, { useState } from "react";
import styled from "styled-components";
import TabContent from "./TabContent";
import BookmarkImg from "../img/illustration-features-tab-1.svg";
import SearchingImg from "../img/illustration-features-tab-2.svg";
import SharingImg from "../img/illustration-features-tab-3.svg";
import { Paragraph, Title, Wrapper } from "../styles/theme/styled-components";
import { PrimaryButton } from "../styles/StyledButton";
import TabList from "./TabList";

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

const StyledTabs = styled.div`
	position: relative;
	margin-top: 7.2rem;

	&::before {
		content: "";
		position: absolute;
		right: 63rem;
		bottom: 0;
		z-index: -1;
		border-radius: 32rem;
		width: 100rem;
		height: 35.2rem;
		background-color: ${(props) => props.theme.colors.primaryColor};

		@media ${({ theme }) => theme.mediaQueries.laptop} {
			right: 50rem;
			bottom: 5rem;
			width: 70rem;
			height: 26rem;
		}

		@media ${({ theme }) => theme.mediaQueries.tablet} {
			bottom: 37rem;
		}

		@media ${({ theme }) => theme.mediaQueries.mobile} {
			right: 5rem;
			bottom: 37rem;
			width: 57.7rem;
			height: 25rem;
		}
	}

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		margin-top: 4rem;
	}
`;

const Content = styled.div`
	display: ${(props) => (props.active ? "flex" : "none")};
	justify-content: flex-end;
	padding-top: 7rem;
	padding-bottom: 20rem;

	@media ${({ theme }) => theme.mediaQueries.laptop} {
		align-items: center;
		padding-bottom: 15rem;
	}

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		flex-direction: column;
	}
`;

const ContentText = styled.div`
	max-width: 44.5rem;
	transform: translateY(25%);

	@media ${({ theme }) => theme.mediaQueries.laptop} {
		padding-right: 1rem;
		max-width: 30rem;
		transform: translateY(15%);
	}

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		padding-top: 5.2rem;
		padding-right: 0;
		max-width: 100%;
	}
`;

const ImgContainer = styled.div`
	position: absolute;
	left: 0;
	top: 12rem;

	@media ${({ theme }) => theme.mediaQueries.laptop} {
		left: 1rem;
	}

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		position: unset;
	}
`;

const ContentImg = styled.img`
	display: block;
	width: 100%;
	height: auto;

	@media ${({ theme }) => theme.mediaQueries.laptop} {
		width: 80%;
	}

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		width: 100%;
	}
`;

const ButtonContainer = styled.div`
	@media ${({ theme }) => theme.mediaQueries.tablet} {
		margin: 0 auto;
		text-align: center;
	}
`;
