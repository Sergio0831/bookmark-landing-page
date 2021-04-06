import React from "react";
import { StyledTabList, TabItem, Tab } from "../styles/StyledTabList";

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
