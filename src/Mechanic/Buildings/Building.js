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
    this.type = meta.type;
  }

  tick(delay, oldState, mutatedState) {
    //on va commencer par aller voir le processus de production pour savoir quelle quantité de ce building vont être mis en operation

    //on va aller voir si on avais une construction
    if (
      this.construction != undefined &&
      this.construction.end < new Date().getTime()
    ) {
      this.construct(this.construction.quantity, oldState, mutatedState);
      this.construction = undefined;
    }
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
      mutatedState.ressources[id].fill(this.quantities[id] * processNum);
    }
    this.active = processNum;

    return mutatedState;
  }

  construct(quantity, oldState, mutatedState) {
    this.count += quantity;
  }

  build(quantity, oldState, mutatedState) {
    //on commence par payer le cout
    for (var ressourceId in this.cost) {
      mutatedState.ressources[ressourceId].quantity -= this.cost[ressourceId];
    }
    //this.count += quantity;
    this.construction = {};
    this.construction.start = new Date().getTime();
    this.construction.end = this.construction.start + 2000 * quantity;
    this.construction.quantity = quantity;
    return mutatedState;
  }

  canBeBuilt(ressources, quantity = 1) {
    //on va aller voir chaque ressources du cost pour voir si on en as assez
    var enoughRessources = true;
    for (var ressourceId in this.cost) {
      if (
        ressources[ressourceId].quantity <
        this.cost[ressourceId] * quantity
      ) {
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
              <BuildingBuildButtonContainer id={id} number={1} />
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
