import React from "react";

import BuildingBuildButtonContainer from "../../Components/Containers/BuildingBuildButtonContainer";
import MiniRessourceContainer from "../../Components/Containers/MiniRessourceContainer";

import Building from "./Building";

module.exports = class Storage extends Building {
  constructor(meta, id) {
    super(meta, id);
    this.storage = meta.storage;
  }

  construct(quantity, oldState, mutatedState) {
    console.dir(oldState.ressources[this.storage.ressource]);
    this.count += quantity;
    var ressource = mutatedState.ressources[this.storage.ressource];
    ressource.quota =
      parseInt(oldState.ressources[this.storage.ressource].quota) +
      parseInt(this.storage.quantity);
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
            </p>
          </div>
          <div className="col s6">
            <p>{JSON.stringify(this)}</p>
          </div>
        </div>
      </div>
    );
  }
};
