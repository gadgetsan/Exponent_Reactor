import React from "react";

export default function TableElement(props) {
  return (
    <div className="table-responsive">
      <table className="table table-hover">{props.children}</table>
    </div>
  );
}
