import React from "react";
import MiniRessourceContainer from "../Containers/MiniRessourceContainer";
import TimeDisplay from "../UI/TimeDisplay";
import TaskProgress from "../UI/TaskProgress";

export default function BuildingListView(props) {
  if (props.building.task != undefined && props.building.task.type == "build") {
    return <TaskProgress task={props.building.task} />;
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
      </span>,
      <TimeDisplay time={props.building.buildTime()} />
    ];
  }
}
