import React from "react";
import MiniRessourceContainer from "../Containers/MiniRessourceContainer";
import RessourceModalContainer from "../Containers/RessourceModalContainer";

export default function RessourceListItemView(props) {
  return (
    <tr>
      <td>
        <MiniRessourceContainer
          id={props.id}
          quantity={props.ressource.quantity}
        />
      </td>
      <td>
        <RessourceModalContainer id={props.id} />
      </td>
    </tr>
  );
}
