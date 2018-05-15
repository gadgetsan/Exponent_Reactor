import React from "react";

export default function MiniRessourceView(props) {
  return (
    <span className={"badge bg-" + props.ressource.color}>
      {props.quantity}{" "}
      <small>
        <i className="material-icons">{props.ressource.icon}</i>
        {props.ressource.name}
      </small>
    </span>
  );
}
