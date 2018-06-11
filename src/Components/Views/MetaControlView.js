import React from "react";

export default function MetaControlView(props) {
  return [
    <a onClick={props.save} className="waves-effect waves-light btn-small">
      SAVE
    </a>,
    <a onClick={props.load} className="waves-effect waves-light btn-small">
      LOAD
    </a>
  ];
}
