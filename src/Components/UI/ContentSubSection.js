import React from "react";

export default function ContentSubSection(props) {
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <div className="card">{props.children}</div>
    </div>
  );
}
