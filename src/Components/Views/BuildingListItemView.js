import React from "react";
import MiniRessourceContainer from "../Containers/MiniRessourceContainer";
import BuildingModalContainer from "../Containers/BuildingModalContainer";

export default function BuildingListItemView(props) {
  return (
    <tr>
      <td>
        <strong>{props.building.name}</strong>
      </td>
      <td>{props.id}</td>
      <td>
        {Object.keys(props.building.quantities)
          .filter(oneKey => {
            return props.building.quantities[oneKey] < 0;
          })
          .map(function(key) {
            return (
              <MiniRessourceContainer
                key={key}
                id={key}
                quantity={-props.building.quantities[key]}
              />
            );
          })
          .reduce((accu, elem) => {
            if (accu === null) {
              return [elem];
            }
            return [accu, elem];
          }, null)}
      </td>
      <td>
        {Object.keys(props.building.quantities)
          .filter(oneKey => {
            return props.building.quantities[oneKey] > 0;
          })
          .map(function(key) {
            return (
              <MiniRessourceContainer
                key={key}
                id={key}
                quantity={props.building.quantities[key]}
              />
            );
          })
          .reduce((accu, elem) => {
            if (accu === null) {
              return [elem];
            }
            return [accu, elem];
          }, null)}
      </td>
      <td>
        <BuildingModalContainer id={props.id} />
      </td>
    </tr>
  );
}
