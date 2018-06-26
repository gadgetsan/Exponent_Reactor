import React from "react";
import MiniRessourceContainer from "../Containers/MiniRessourceContainer";
import TimeDisplay from "../UI/TimeDisplay";
import TaskProgress from "../UI/TaskProgress";

export default function BuildingResearchButtonView(props) {
  if (
    props.building.task != undefined &&
    props.building.task.type == "research"
  ) {
    return <TaskProgress task={props.building.task} />;
  } else {
    return [
      <a
        onClick={props.research}
        className={
          "waves-effect waves-light btn-small " +
          (props.building.canBeBuilt(props.ressources, props.number) &&
          props.researchBuilding.canStartNewTask()
            ? "enabled"
            : "disabled")
        }
      >
        {props.building.name}
      </a>,
      <span> Cost: </span>,
      <span>
        {Object.keys(props.building.cost).map(ressourceId => {
          var ressourceQuantity = props.building.cost[ressourceId];
          return (
            <MiniRessourceContainer
              id={ressourceId}
              quantity={ressourceQuantity}
            />
          );
        })}
      </span>,
      <TimeDisplay time={props.building.buildTime()} />
    ];
  }
  /*
  var time = props.building.buildTime();
  if (props.building.researching != undefined) {
    var totalTime =
      props.building.researching.end - props.building.researching.start;
    time = props.building.researching.end - new Date().getTime();
    var percentTimeLeft = Math.ceil((totalTime - time) / totalTime * 100.0);
  }

  var days = Math.floor(time / (1000 * 60 * 60 * 24));
  var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((time % (1000 * 60)) / 1000);

  var timeJSX = [
    <b>{days > 0 ? days + "d" : ""}</b>,
    <b>{hours > 0 ? hours + "h" : ""}</b>,
    <b>{minutes > 0 ? minutes + "m" : ""}</b>,
    <b>{seconds > 0 ? seconds + "s" : ""}</b>
  ];

  if (
    props.building.task != undefined &&
    props.building.task.type == "research"
  ) {
    return [
      <div className="progress">
        <div className="determinate" style={{ width: percentTimeLeft + "%" }} />
      </div>,
      timeJSX
    ];
  } else if (props.building.task == undefined) {
    return [
      <a
        onClick={props.research}
        className={
          "waves-effect waves-light btn-small " +
          (props.building.canBeBuilt(props.ressources, 1)
            ? "enabled"
            : "disabled")
        }
      >
        {props.building.name}
      </a>,
      <span> Cost: </span>,
      <span>
        {Object.keys(props.building.cost).map(ressourceId => {
          var ressourceQuantity = props.building.cost[ressourceId];
          return (
            <MiniRessourceContainer
              id={ressourceId}
              quantity={ressourceQuantity}
            />
          );
        })}
      </span>,
      timeJSX
    ];
  */
}
