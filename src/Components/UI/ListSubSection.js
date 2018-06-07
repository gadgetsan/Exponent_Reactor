import React from "react";

export default function ListSubSection(props) {
  return [
    <div className="header" key="0">
      <h2>{props.name}</h2>
    </div>,
    <div className="body" key="1">
      <div className="table-responsive">
        <table className="table table-hover">{props.children}</table>
      </div>
    </div>
  ];
}
