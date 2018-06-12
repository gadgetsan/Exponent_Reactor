import React from "react";

import BuildingStatus from "../../Components/UI/BuildingStatus";
import BuildingModalContainer from "../Containers/BuildingModalContainer";

export default function BuildingListItemView(props) {
  return (
    <tr>
      <td>
        <strong>{props.building.name}</strong>
      </td>
      <td>{props.building.count}</td>
      <td>
        <BuildingStatus building={props.building} />
      </td>
      <td>
        <BuildingModalContainer id={props.building.id} />
      </td>
    </tr>
  );
}
