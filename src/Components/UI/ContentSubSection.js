import React from "react";

export default function ContentSubSection(props) {
  return (
    <div className={"col s" + props.size}>
      <div className="card">{props.children}</div>
    </div>
  );
}
