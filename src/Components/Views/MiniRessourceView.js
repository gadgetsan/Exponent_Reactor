import React from "react";

export default class MiniRessourceView extends React.Component {
  componentDidMount() {
    var elems = document.querySelectorAll(".tooltipped");
    var instances = M.Tooltip.init(elems, { margin: -10 });
  }

  render() {
    if (this.props.ressource === undefined) {
      return (
        <span
          className={"chip tooltipped"}
          data-position="bottom"
          data-tooltip="UNKNOWN"
        >
          <i className={"badge-img fa fa-question"} />
          -
        </span>
      );
    } else {
      return (
        <span
          className={"chip bg-" + this.props.ressource.color + " tooltipped"}
          data-position="bottom"
          data-tooltip={this.props.ressource.name}
        >
          <i className={"badge-img fa fa-" + this.props.ressource.icon} />
          {this.props.quantity} {this.props.ressource.unit}
        </span>
      );
    }
  }
}
