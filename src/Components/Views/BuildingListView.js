import React from "react";
import BuildingListItemView from "./BuildingListItemView";

export default function BuildingListView(props) {
  return [
    <thead>
      <tr>
        <th>Name</th>
        <th>Code</th>
        <th>Input</th>
        <th>Output</th>
      </tr>
    </thead>,
    <tbody>
      {props.buildings.map(function(building) {
        return <BuildingListItemView building={building} key={building.key} />;
      })}
    </tbody>
  ];
}
