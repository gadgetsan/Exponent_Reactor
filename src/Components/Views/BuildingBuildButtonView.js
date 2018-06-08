import React from "react";
import MiniRessourceContainer from "../Containers/MiniRessourceContainer";

export default function BuildingListView(props) {
  return [
    <a
      onClick={props.build}
      className={
        "waves-effect waves-light btn-small " +
        (props.building.canBeBuilt(props.ressources) ? "enabled" : "disabled")
      }
    >
      BUILD
    </a>,
    <span> Cost: </span>,
    <span>
      {Object.keys(props.building.cost).map(ressourceId => {
        var quantity = props.building.cost[ressourceId];
        return <MiniRessourceContainer id={ressourceId} quantity={quantity} />;
      })}
    </span>
  ];
}
