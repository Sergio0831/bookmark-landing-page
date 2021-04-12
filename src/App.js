import React, { lazy, Suspense } from "react";
import GlobalStyle from "./styles/theme/globalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import { Wrapper } from "./styles/theme/styled-components";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/theme/theme";

const Header = lazy(() => import("./layout/Header"));
const Main = lazy(() => import("./layout/Main"));
const Footer = lazy(() => import("./layout/Footer"));

function App() {
	return (
		<Router>
			<ThemeProvider theme={Theme}>
				<GlobalStyle />
				<Wrapper width="144.4rem" overflow="hidden">
					<Suspense fallback={<h1>Loading...</h1>}>
						<Header />
						<Main />
						<Footer />
					</Suspense>
				</Wrapper>
			</ThemeProvider>
		</Router>
	);
}

export default App;
