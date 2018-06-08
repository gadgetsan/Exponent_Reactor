module.exports = class Building {
  constructor(meta) {
    this.name = meta.name;
    this.key = meta.key;
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
};
