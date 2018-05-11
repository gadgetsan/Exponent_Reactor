import React from "react";
import { Provider } from "react-redux";

export default ({ name, other }) => {
  return (
    <div>
      <h3>Hello {name}!</h3>
      <p>THIS IS A {other}, because</p>
    </div>
  );
};
