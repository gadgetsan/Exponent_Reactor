import React from "react";
import MiniRessourceContainer from "../Containers/MiniRessourceContainer";

export default function BuildingListItemView(props) {
  return (
    <tr>
      <td>
        <strong>{props.building.name}</strong>
      </td>
      <td>{props.building.key}</td>
      <td>
        {Object.keys(props.building.quantities).map(function(key) {
          if (props.building.quantities[key] < 0) {
            return (
              <MiniRessourceContainer
                key={key}
                id={key}
                quantity={-props.building.quantities[key]}
              />
            );
          }
        })}
      </td>
      <td>
        {Object.keys(props.building.quantities).map(function(key) {
          if (props.building.quantities[key] > 0) {
            return (
              <MiniRessourceContainer
                key={key}
                id={key}
                quantity={props.building.quantities[key]}
              />
            );
          }
        })}
      </td>
    </tr>
  );
}
