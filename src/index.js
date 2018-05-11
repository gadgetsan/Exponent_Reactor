import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import Store from "./Redux/Setup";

const styles = {
  textAlign: "center"
};

function App(props) {
  return (
    <div style={styles}>
      <Hello name="Test" />
      <h4>Start typing to see some magic happen {"\u2728"}</h4>
    </div>
  );
}

render(<App />, document.getElementById("root"));
console.log("initial state: ", Store.getState());
