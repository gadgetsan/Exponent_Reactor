import React from "react";

export default class BuildingModalView extends React.Component {
  componentDidMount() {
    var elems = document.querySelectorAll(".tabs");
    var instances = M.Tabs.init(elems, {});
  }
  render() {
    var list = (
      <ul className="tabs">
        {this.props.tabs.map(tab => {
          return (
            <li className="tab col s6">
              <a href={"#" + encodeURI(tab.name)}>{tab.name}</a>
            </li>
          );
        })}
      </ul>
    );
    var divs = this.props.tabs.map(tab => {
      return (
        <div id={encodeURI(tab.name)} className="col s12">
          {tab.component}
        </div>
      );
    });

    return (
      <div className="row">
        <div className="col s12">{list}</div>
        {divs}
      </div>
    );
  }
}
