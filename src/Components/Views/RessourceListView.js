import React from "react";
import RessourceListItemView from "./RessourceListItemView";

export default function RessourceListView(props) {
  return [
    <thead key="0">
      <tr>
        <th>Icon</th>
        <th />
      </tr>
    </thead>,
    <tbody key="1">
      {props.ressources.map(function(ressource, index) {
        return (
          <RessourceListItemView ressource={ressource} key={index} id={index} />
        );
      })}
    </tbody>
  ];
}
