import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./containers/AppContainer";
import { Provider } from "react-redux";
import repositoryStore from "./states/RepositoriesState";

ReactDOM.render(
  <Provider store={repositoryStore}>
    <AppContainer repositories={null!} />
  </Provider>,
  document.getElementById("app")
);
