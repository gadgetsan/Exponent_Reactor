import React from "react";
import BuildingListItemView from "./BuildingListItemView";

export default function BuildingListView(props) {
  return [
    <thead key="0">
      <tr>
        <th>Name</th>
        <th>Quantity</th>
        <th>Efficiency</th>
        <th />
      </tr>
    </thead>,
    <tbody key="1">
      {props.buildings.map(function(building, index) {
        return (
          <BuildingListItemView building={building} key={index} id={index} />
        );
      })}
    </tbody>
  ];
}
