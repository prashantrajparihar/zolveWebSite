import React from "react";
import "./styles/styles.css";
import ThirdPartyApi from "./component/ThirdPartyApi/ThirdPartyApi";
import CopyToClipboardComponent from "./component/CopyToClipboard/CopyToClipboard";
import Selfie from "./component/Selfie/Selfie";
import Header from "./component/Header";
import Home from "./component/Home";
import { Provider } from "react-redux";
import store from "./redux/store";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
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
              <Route render={() => <h3>OOPS Page Not Found</h3>} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;

// https://www.youtube.com/watch?v=Ly-9VTXJlnA&ab_channel=TraversyMedia
// https://www.youtube.com/watch?v=mlSKLmG80Us&ab_channel=Arslan
// https://www.youtube.com/watch?v=ffoTnHYia18&feature=emb_imp_woyt&ab_channel=FrontendCharts
