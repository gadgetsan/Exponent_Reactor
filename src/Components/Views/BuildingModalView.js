import React from "react";

import BuildingStatus from "../../Components/UI/BuildingStatus";
import BuildingBuildButtonContainer from "../../Components/Containers/BuildingBuildButtonContainer";
import MiniRessourceContainer from "../Containers/MiniRessourceContainer";

export default class BuildingModalView extends React.Component {
  componentDidMount() {
    var elems = document.querySelectorAll(".modal");
    var instances = M.Modal.init(elems, {});
  }

  render() {
    var self = this;
    return [
      <a
        className="waves-effect waves-light btn-small modal-trigger"
        href={"#buildingModal" + this.props.id}
        key="0"
      >
        INFO
      </a>,
      <div id={"buildingModal" + this.props.id} className="modal" key="1">
        {this.props.building.getModal(this.props.id)}
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
