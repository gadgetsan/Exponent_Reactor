import React from "react";
import MiniRessourceContainer from "../Containers/MiniRessourceContainer";

export default function BuildingListView(props) {
  if (props.building.construction != undefined) {
    var totalTime =
      props.building.construction.end - props.building.construction.start;
    var currentTimeLeft =
      props.building.construction.end - new Date().getTime();
    var percentTimeLeft = Math.ceil(
      (totalTime - currentTimeLeft) / totalTime * 100.0
    );

    var days = Math.floor(currentTimeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (currentTimeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor(
      (currentTimeLeft % (1000 * 60 * 60)) / (1000 * 60)
    );
    var seconds = Math.floor((currentTimeLeft % (1000 * 60)) / 1000);
    return [
      <div className="progress">
        <div className="determinate" style={{ width: percentTimeLeft + "%" }} />
      </div>,
      <b>{days > 0 ? days + "d" : ""}</b>,
      <b>{hours > 0 ? hours + "h" : ""}</b>,
      <b>{minutes > 0 ? minutes + "m" : ""}</b>,
      <b>{seconds > 0 ? seconds + "s" : ""}</b>
    ];
  } else {
    return [
      <a
        onClick={props.build}
        className={
          "waves-effect waves-light btn-small " +
          (props.building.canBeBuilt(props.ressources, props.number)
            ? "enabled"
            : "disabled")
        }
      >
        BUILD
      </a>,
      <span> Cost: </span>,
      <span>
        {Object.keys(props.building.cost).map(ressourceId => {
          var ressourceQuantity = props.building.cost[ressourceId];
          return (
            <MiniRessourceContainer
              id={ressourceId}
              quantity={ressourceQuantity * props.number}
            />
          );
        })}
      </span>
    ];
  }
}
