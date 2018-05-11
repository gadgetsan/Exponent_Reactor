/*DEPENDENCIES*/
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
/*STORE*/
import Store from "./Redux/store.js";
/*COMPONENTS*/
import BuildingListView from "./Components/Views/BuildingListView";

const styles = {
  textAlign: "center"
};

function App(props) {
  return (
    <Provider store={Store}>
      <div style={styles}>
        <h4>Start typing to see some magic happen {"\u2728"}</h4>
        <BuildingListView />
      </div>
    </Provider>
  );
}

render(<App />, document.getElementById("root"));
