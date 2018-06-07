import React from "react";

export default function BuildingListView(props) {
  return (
    <a className="waves-effect waves-light btn-small" onClick={props.build}>
      BUILD
    </a>
  );
}
