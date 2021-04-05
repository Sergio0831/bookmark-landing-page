import React from "react";
import styled from "styled-components";

const TabContent = ({ children }) => {
	return <StyledTabContent>{children}</StyledTabContent>;
};

export default TabContent;

const StyledTabContent = styled.div``;
