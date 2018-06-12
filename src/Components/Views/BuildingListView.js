import React from "react";
import BuildingListItemView from "./BuildingListItemView";
import TableElement from "../UI/TableElement";

export default function BuildingListView(props) {
  return [
    <TableElement>
      <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Efficiency</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {props.buildings.map(function(building, index) {
          return <BuildingListItemView building={building} key={index} />;
        })}
      </tbody>
    </TableElement>
  ];
}
