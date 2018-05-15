import React from "react";

export default function ListSubSection(props) {
  return [
    <div className="header">
      <h2>Buildings</h2>
    </div>,
    <div className="body">
      <div className="table-responsive">
        <table className="table table-hover">{props.children}</table>
      </div>
    </div>
  ];
}
