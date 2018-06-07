import React from "react";

export default function ActiveStatus(props) {
  if (props.value === 1) {
    return <span className="new badge green" data-badge-caption="Active" />;
  } else {
    return <span className="new badge red" data-badge-caption="Inactive" />;
  }
}
