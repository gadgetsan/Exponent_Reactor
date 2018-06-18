import React from "react";
import PopulationListItemView from "./PopulationListItemView";
import TableElement from "../UI/TableElement";

export default function BuildingListView(props) {
  return [
    <TableElement>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {props.population.map(function(people, index) {
          return <PopulationListItemView people={people} key={index} />;
        })}
      </tbody>
    </TableElement>
  ];
}
