import Content from "./components/Content";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import { Wrapper } from "./components/styled-components";

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Wrapper width="140.4rem" overflow="hidden">
				<Content />
			</Wrapper>
		</Router>
	);
}

export default App;
