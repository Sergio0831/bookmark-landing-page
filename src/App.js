import Content from "./components/Content";
import GlobalStyle from "./styles/theme/globalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import { Wrapper } from "./styles/theme/styled-components";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/theme/theme";

function App() {
	return (
		<Router>
			<ThemeProvider theme={Theme}>
				<GlobalStyle />
				<Wrapper width="144.4rem" overflow="hidden">
					<Content />
				</Wrapper>
			</ThemeProvider>
		</Router>
	);
}

export default App;
