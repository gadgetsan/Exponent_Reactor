import React from "react";
import TimeDisplay from "../UI/TimeDisplay";

export default function BuildingListView(props) {
  var totalTime = props.task.end - props.task.start;
  var currentTimeLeft = props.task.end - new Date().getTime();
  var percentTimeLeft = Math.ceil(
    (totalTime - currentTimeLeft) / totalTime * 100.0
  );
  return [
    <div className="progress">
      <div className="determinate" style={{ width: percentTimeLeft + "%" }} />
    </div>,
    <TimeDisplay time={currentTimeLeft} />
  ];
}
