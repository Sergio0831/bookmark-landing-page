import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: inherit;
}

html {
	font-size: 62.5%;
}

body {
    font-family: "Rubik", sans-serif;
    font-weight: ${(props) => props.theme.fontWeights.regular};
	color: ${(props) => props.theme.colors.darkColor};
}

li {
	list-style: none;
}

a {
	display: inline-block;
	text-decoration: none;
}
`;

export default GlobalStyle;
