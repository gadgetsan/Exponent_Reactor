import React from "react";

import BuildingStatus from "../../Components/UI/BuildingStatus";
import BuildingBuildButtonContainer from "../../Components/Containers/BuildingBuildButtonContainer";
import MiniRessourceContainer from "../../Components/Containers/MiniRessourceContainer";

module.exports = class Building {
  constructor(meta, id) {
    this.name = meta.name;
    this.id = id;
    this.count = meta.count;
    this.cost = meta.cost;
    this.quantities = meta.quantities;
    this.active = meta.active;
  }

  tick(delay, oldState, mutatedState) {
    //on va commencer par aller voir le processus de production pour savoir quelle quantité de ce building vont être mis en operation

    var processNum = this.count;
    for (var id in this.quantities) {
      if (this.quantities[id] < 0) {
        if (
          processNum * this.quantities[id] * -1 >
          mutatedState.ressources[id].quantity
        ) {
          processNum = Math.floor(
            mutatedState.ressources[id].quantity / (this.quantities[id] * -1)
          );
        }
      }
    }
    for (var id in this.quantities) {
      mutatedState.ressources[id].quantity += this.quantities[id] * processNum;
    }
    this.active = processNum;

    return mutatedState;
  }

  build(quantity, oldState, mutatedState) {
    //on commence par payer le cout
    for (var ressourceId in this.cost) {
      mutatedState.ressources[ressourceId].quantity -= this.cost[ressourceId];
    }
    this.count += quantity;
    return mutatedState;
  }

  canBeBuilt(ressources) {
    //on va aller voir chaque ressources du cost pour voir si on en as assez
    var enoughRessources = true;
    for (var ressourceId in this.cost) {
      if (ressources[ressourceId].quantity < this.cost[ressourceId]) {
        enoughRessources = false;
      }
    }
    return enoughRessources;
  }

  getModal(id) {
    var self = this;
    return (
      <div className="modal-content">
        <h4>{this.name}</h4>
        <div className="row">
          <div className="col s6">
            <p>
              <b>Quantity: </b>
              {this.count}
              <br />
              <b>Efficiency: </b>
              <BuildingStatus building={this} />
              <br />
              <br />
              <BuildingBuildButtonContainer id={id} />
            </p>
          </div>
          <div className="col s6">
            <div>Input: </div>
            <div>
              {Object.keys(self.quantities)
                .filter(oneKey => {
                  return self.quantities[oneKey] < 0;
                })
                .map(function(key) {
                  return (
                    <MiniRessourceContainer
                      key={key}
                      id={key}
                      quantity={-self.quantities[key]}
                    />
                  );
                })
                .reduce((accu, elem) => {
                  if (accu === null) {
                    return [elem];
                  }
                  return [accu, elem];
                }, null)}
            </div>
            <div>Output: </div>
            <div>
              {Object.keys(self.quantities)
                .filter(oneKey => {
                  return self.quantities[oneKey] > 0;
                })
                .map(function(key) {
                  return (
                    <MiniRessourceContainer
                      key={key}
                      id={key}
                      quantity={self.quantities[key]}
                    />
                  );
                })
                .reduce((accu, elem) => {
                  if (accu === null) {
                    return [elem];
                  }
                  return [accu, elem];
                }, null)}
            </div>
          </div>
          <div className="col s6">
            <p>{JSON.stringify(this)}</p>
          </div>
        </div>
      </div>
    );
  }
};
