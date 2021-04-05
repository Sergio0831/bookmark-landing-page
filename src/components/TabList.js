import React from "react";
import styled from "styled-components";

const TabList = ({ onHandleClick, active }) => {
	return (
		<StyledTabList>
			<TabItem>
				<Tab onClick={onHandleClick} active={active === 0} id={0}>
					Simple Bookmarking
				</Tab>
			</TabItem>
			<TabItem>
				<Tab onClick={onHandleClick} active={active === 1} id={1}>
					Speedy Searching
				</Tab>
			</TabItem>
			<TabItem>
				<Tab onClick={onHandleClick} active={active === 2} id={2}>
					Easy Sharing
				</Tab>
			</TabItem>
		</StyledTabList>
	);
};

export default TabList;

const StyledTabList = styled.ul`
	display: flex;
	margin: 0 auto;
	max-width: 73rem;

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		flex-direction: column;
		max-width: 100%;
	}
`;

const TabItem = styled.li`
	border-bottom: 1px solid rgba(73, 93, 207, 0.2);

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		text-align: center;

		&:first-child {
			border-top: 1px solid rgba(73, 93, 207, 0.2);
		}
	}
`;

const Tab = styled.button`
	outline: none;
	border: none;
	border-bottom: ${(props) =>
		props.active ? "4px solid #FA5959" : "4px solid transparent"};
	padding: 0 5rem 2.6rem;
	font-size: 16px;
	line-height: 17px;
	letter-spacing: 0.5px;
	color: ${(props) => !props.active && "rgba(36, 42, 69, 0.75)"};
	background-color: transparent;
	transition: ${(props) => props.theme.transitions.basic};
	cursor: pointer;

	&:hover {
		color: ${(props) => props.theme.colors.secondaryColor};
	}

	@media ${({ theme }) => theme.mediaQueries.tablet} {
		padding: 2rem 0 1.6rem;
	}
`;
