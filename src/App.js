import React, { lazy, Suspense } from "react";
import GlobalStyle from "./styles/theme/globalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import { Wrapper } from "./styles/theme/styled-components";
import styled, { ThemeProvider } from "styled-components";
import Theme from "./styles/theme/theme";
import Loader from "./img/Position.gif";

const Header = lazy(() => import("./layout/Header"));
const Main = lazy(() => import("./layout/Main"));
const Footer = lazy(() => import("./layout/Footer"));

function App() {
	return (
		<Router>
			<ThemeProvider theme={Theme}>
				<GlobalStyle />
				<StyledWrapper>
					<Suspense
						fallback={
							<StyledLoader>
								<img src={Loader} alt="Loader"></img>
							</StyledLoader>
						}
					>
						<Header />
						<Main />
						<Footer />
					</Suspense>
				</StyledWrapper>
			</ThemeProvider>
		</Router>
	);
}

export default App;

const StyledWrapper = styled(Wrapper)`
	overflow: hidden;
	max-width: 144.4rem;
`;

const StyledLoader = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;
