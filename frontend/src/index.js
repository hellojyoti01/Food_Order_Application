import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store.js";
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
const options = {
	timeout: 5000,
	positions: positions.BOTTOM_CENTER,
	transitions: transitions.SCALE,
};
// const root = document.getElementById("root");
// root.render(<h1>Hello</h1>);
axios.defaults.baseURL = "http://localhost:8000";
ReactDOM.render(
	<Provider store={store}>
		<AlertProvider template={AlertTemplate} {...options}>
			<App />
		</AlertProvider>
	</Provider>,
	document.getElementById("root")
);
