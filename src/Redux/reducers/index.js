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
import { META_SAVE, META_LOAD } from "../actions/meta-actions";
import BuildingFactory from "../../Mechanic/Buildings/BuildingFactory";

var sessionStorage = localStorage.getItem("Reactor");
var initialState = {};
if (sessionStorage != null) {
  initialState = {
    ressources: JSON.parse(sessionStorage).ressources,
    buildings: JSON.parse(sessionStorage).buildings.map(buildingMeta => {
      return BuildingFactory(buildingMeta);
    }),
    session: sessionStorage
  };
} else {
  var fs = require("fs");
  var buildings = JSON.parse(
    fs.readFileSync("../../data/buildings.json", "utf8")
  );
  var ressources = JSON.parse(
    fs.readFileSync("../../data/ressources.json", "utf8")
  );
  initialState = {
    ressources: ressources,
    buildings: buildings.map(buildingMeta => {
      return BuildingFactory(buildingMeta);
    })
  };
}

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
    case META_SAVE: {
      console.log("SAVE");
      var mutatedState = JSON.parse(JSON.stringify(state));

      var sessionObject = JSON.stringify({
        ressources: state.ressources,
        buildings: state.buildings
      });

      localStorage.setItem("Reactor", sessionObject);
      return {
        ...state,
        session: sessionObject
      };
      break;
    }
    case META_LOAD: {
      console.log("LOAD");
      var mutatedState = Object.assign({}, state);
      console.dir(mutatedState.session);
      return {
        ...state,
        ressources: JSON.parse(mutatedState.session).ressources.map(
          ressource => {
            return ressource;
          }
        ),
        buildings: JSON.parse(mutatedState.session).buildings.map(
          buildingMeta => {
            return BuildingFactory(buildingMeta);
          }
        )
      };
      break;
    }
    default:
      return state;
  }
}
