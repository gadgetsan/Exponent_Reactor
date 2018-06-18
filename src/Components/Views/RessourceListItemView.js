import React from "react";
import MiniRessourceContainer from "../Containers/MiniRessourceContainer";
import RessourceModalContainer from "../Containers/RessourceModalContainer";
import SIDisplay from "../../Components/UI/SIDisplay";

export default function RessourceListItemView(props) {
  return (
    <tr>
      <td>
        <MiniRessourceContainer
          id={props.id}
          quantity={props.ressource.quantity}
        />
        <small>
          {" "}
          /{" "}
          <SIDisplay
            value={props.ressource.quota}
            unit={props.ressource.unit}
          />
        </small>
      </td>
      <td>
        <RessourceModalContainer id={props.id} />
      </td>
    </tr>
  );
}
