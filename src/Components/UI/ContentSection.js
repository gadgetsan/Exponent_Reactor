import React from "react";

export default function ContentSection(props) {
  return (
    <section className="content">
      <div className="container-fluid">
        <div className="block-header">{props.children}</div>
      </div>
    </section>
  );
}
