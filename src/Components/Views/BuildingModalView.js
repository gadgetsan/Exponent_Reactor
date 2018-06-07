import React from "react";

import ActiveStatus from "../../Components/UI/ActiveStatus";
import BuildingBuildButtonContainer from "../../Components/Containers/BuildingBuildButtonContainer";

export default class BuildingModalView extends React.Component {
  componentDidMount() {
    var elems = document.querySelectorAll(".modal");
    var instances = M.Modal.init(elems, {});
  }

  render() {
    return [
      <a
        className="waves-effect waves-light btn-small modal-trigger"
        href={"#buildingModal" + this.props.id}
        key="0"
      >
        INFO
      </a>,
      <div id={"buildingModal" + this.props.id} className="modal" key="1">
        <div className="modal-content">
          <h4>{this.props.building.name}</h4>
          <div className="row">
            <div className="col s8">
              <p>
                <b>Quantity: </b>
                {this.props.building.count}
                <br />
                <b>State: </b>
                <ActiveStatus value={this.props.building.active} />
                <br />
                <br />
                <BuildingBuildButtonContainer id={this.props.id} />
              </p>
            </div>
            <div className="col s4">
              <p>{JSON.stringify(this.props)}</p>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
          >
            Close
          </a>
        </div>
      </div>
    ];
  }
}
