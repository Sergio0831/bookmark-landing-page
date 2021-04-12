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

::-webkit-scrollbar {
	width: 1.2rem;
}

::-webkit-scrollbar-track {
  border-radius: 1rem;
  box-shadow: inset 0 0 5px ${(props) => props.theme.colors.greyColor};
}

::-webkit-scrollbar-thumb {
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.secondaryColor};
}
`;

export default GlobalStyle;
