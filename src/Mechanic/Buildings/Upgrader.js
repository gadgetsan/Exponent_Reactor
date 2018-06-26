import React from "react";
import Building from "./Building";

import BuildingBuildButtonContainer from "../../Components/Containers/BuildingBuildButtonContainer";
import BuildingResearchListContainer from "../../Components/Containers/BuildingResearchListContainer";
import MiniRessourceContainer from "../../Components/Containers/MiniRessourceContainer";

module.exports = class Upgrader extends Building {
  constructor(meta, id) {
    super(meta, id);
  }

  getModal(id) {
    return (
      <div className="modal-content">
        <h4>{this.name}</h4>
        <div className="row">
          <div className="col s6">
            <p>
              <b>Quantity: </b>
              {this.count}
              <br />
              <br />
              <BuildingBuildButtonContainer id={id} number={1} />
              <hr />
              <b>Buildings</b>
              <br />
            </p>
          </div>
        </div>
      </div>
    );
  }
};
