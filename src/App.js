import GlobalStyle from "./styles/theme/globalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import { Wrapper } from "./styles/theme/styled-components";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/theme/theme";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";

function App() {
	return (
		<Router>
			<ThemeProvider theme={Theme}>
				<GlobalStyle />
				<Wrapper width="144.4rem" overflow="hidden">
					<Header />
					<Main />
					<Footer />
				</Wrapper>
			</ThemeProvider>
		</Router>
	);
}

export default App;
