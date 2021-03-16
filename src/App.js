import Content from "./components/Content";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Content />
		</Router>
	);
}

export default App;
