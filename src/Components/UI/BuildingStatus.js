import React from "react";

export default function BuildingStatus(props) {
  if (props.building.count === 0) {
    return <span className="new badge black" data-badge-caption="-" />;
  }
  var activePercentage = Math.round(
    props.building.active / props.building.count * 100
  );
  if (activePercentage === 100) {
    return (
      <span
        className="new badge green"
        data-badge-caption={activePercentage + "%"}
      />
    );
  } else if (activePercentage > 60) {
    return (
      <span
        className="new badge orange"
        data-badge-caption={activePercentage + "%"}
      />
    );
  } else {
    return (
      <span
        className="new badge red"
        data-badge-caption={activePercentage + "%"}
      />
    );
  }
}
