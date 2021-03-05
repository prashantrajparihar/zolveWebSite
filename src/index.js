import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./styles/styles.css";
import ThirdPartyApi from "./component/ThirdPartyApi/ThirdPartyApi";
import CopyToClipboardComponent from "./component/CopyToClipboard/CopyToClipboard";
import Selfie from "./component/Selfie/Selfie";
import Header from "./component/Header";
import Home from "./component/Home";
import { Provider } from "react-redux";
import store from "./redux/store";

import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Provider store={store}>
      <BrowserRouter>
        <Header />

        <div className="container">
          <Switch>
            <Route path="/thirdPartyApi" component={ThirdPartyApi} />
            <Route
              path="/copyToClipboard"
              component={CopyToClipboardComponent}
            />
            <Route path="/selfie" exact component={Selfie} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
