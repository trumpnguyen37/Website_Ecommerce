import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "./styles/icons/icons.css";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
