import React from "react";

export default function MetaControlView(props) {
  return [
    <a onClick={props.save} className="waves-effect waves-light btn-small">
      SAVE
    </a>,
    <a
      onClick={props.load}
      className={
        "waves-effect waves-light btn-small " +
        (localStorage.getItem("Reactor") != undefined ? "enabled" : "disabled")
      }
    >
      LOAD
    </a>,
    <a onClick={props.clear} className="waves-effect waves-light btn-small">
      CLEAR
    </a>
  ];
}
