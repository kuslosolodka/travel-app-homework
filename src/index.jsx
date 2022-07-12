import React from "react";
import ReactDOM from "react-dom/client";
import "../src/assets/css/style.css";
import App from "./components/app/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/app/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
