import React from "react";
import Building from "./Building";

module.exports = class Lab extends Building {
  build(quantity, oldState, mutatedState) {
    console.log("HELLO FROM LAB!!!");
    return mutatedState;
  }

  getModal(id) {
    return <span> HELLO WORLD! </span>;
  }
};
