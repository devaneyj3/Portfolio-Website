import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./container/App";
import { Jumbotron } from "reactstrap";

ReactDOM.render(
	<Router>
		<Jumbotron>
			<App />
		</Jumbotron>
	</Router>,
	document.getElementById("root")
);
