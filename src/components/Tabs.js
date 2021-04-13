import React, { useState } from "react";
import { Wrapper } from "../styles/theme/styled-components";
import { PrimaryButton } from "../styles/StyledButton";
import TabList from "./TabList";
import {
	StyledTabs,
	Content,
	ContentText,
	ImgContainer,
	ContentImg,
	ButtonContainer,
	StyledTitle,
	StyledParagraph,
} from "../styles/StyledTabs";
import content from "../data/TabsData";
import { imageTabVariants, textTabVariants } from "../animation/variants";
import { motion, AnimatePresence } from "framer-motion";

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
							<AnimatePresence exitBeforeEnter>
								{active === item.id && (
									<>
										<ImgContainer
											as={motion.div}
											variants={imageTabVariants}
											initial="hidden"
											animate="visible"
										>
											<ContentImg src={item.image} alt={item.title} />
										</ImgContainer>
										<ContentText
											as={motion.div}
											variants={textTabVariants}
											initial="hidden"
											animate="visible"
										>
											<StyledTitle>{item.title}</StyledTitle>
											<StyledParagraph>{item.info}</StyledParagraph>
											<ButtonContainer>
												<PrimaryButton to="/">More Info</PrimaryButton>
											</ButtonContainer>
										</ContentText>
									</>
								)}
							</AnimatePresence>
						</Content>
					);
				})}
			</StyledTabs>
		</Wrapper>
	);
};

export default Tabs;
