/*
import { combineReducers } from "redux";
import productsReducer from "./products-reducer";
import cartReducer from "./cart-reducer";
import buildingsReducer from "./buildings-reducer";
import ressourcesReducer from "./ressources-reducer";

const allReducers = {
  products: productsReducer,
  shoppingCart: cartReducer,
  buildings: buildingsReducer,
  ressources: ressourcesReducer
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;
*/
/*=====TENTATIVE DDE COMBINER LES REDUCER ENSEMBLE PARCE QU'ILS SEMBLENT ÊTRE TOUS RELISÉ*/
import { BUILDINGS_TICK, BUILD_BUILDING } from "../actions/buildings-actions";
import Building from "../../Mechanic/Buildings/Building";

var fs = require("fs");
var buildings = JSON.parse(
  fs.readFileSync("../../data/buildings.json", "utf8")
);
var ressources = JSON.parse(
  fs.readFileSync("../../data/ressources.json", "utf8")
);

var initialState = {
  buildings: buildings.map(buildingMeta => {
    return new Building(buildingMeta);
  }),
  ressources: ressources
};

export default function(state = initialState, action) {
  switch (action.type) {
    case BUILDINGS_TICK: {
      //pour chaque buuilding de notre Etat, on va effectuer son tick
      var mutatedState = Object.assign({}, state);
      for (var i in state.buildings) {
        var building = state.buildings[i];
        //console.dir(building);
        mutatedState = building.tick(1, state, mutatedState);
      }
      //J'ai l'impression que c'est une passe-passe...
      return {
        ...state,
        ressources: mutatedState.ressources.map(ressource => {
          return ressource;
        }),
        buildings: mutatedState.buildings.map(building => {
          return building;
        })
      };
    }
    case BUILD_BUILDING: {
      var mutatedState = Object.assign({}, state);
      var building = state.buildings[action.payload.buildingId];
      mutatedState = building.build(1, state, mutatedState);
      return {
        ...state,
        ressources: mutatedState.ressources.map(ressource => {
          return ressource;
        }),
        buildings: mutatedState.buildings.map(building => {
          return building;
        })
      };
    }
    default:
      return state;
  }
}
