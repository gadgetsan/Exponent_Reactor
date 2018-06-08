import React from "react";

export default function SIDisplay(props) {
  var SIPrefixes = ["", "k", "M", "G", "T", "P", "E", "Z", "Y"];
  var displayValue = props.value;
  var prefixIndex = 0;
  while (displayValue > 999) {
    displayValue = Math.round(displayValue / 1000.0);
    prefixIndex++;
  }
  return (
    <span>
      {displayValue} {SIPrefixes[prefixIndex]}
      {props.unit}
    </span>
  );
}
