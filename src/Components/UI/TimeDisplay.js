import React from "react";

export default function TimeDisplay(props) {
  var days = Math.floor(props.time / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (props.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((props.time % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((props.time % (1000 * 60)) / 1000);

  var timeJSX = [
    <b>{days > 0 ? days + "d" : ""}</b>,
    <b>{hours > 0 ? hours + "h" : ""}</b>,
    <b>{minutes > 0 ? minutes + "m" : ""}</b>,
    <b>{seconds > 0 ? seconds + "s" : ""}</b>
  ];
  return timeJSX;
}
