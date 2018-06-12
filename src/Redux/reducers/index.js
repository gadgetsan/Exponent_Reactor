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

import {
  BUILDINGS_TICK,
  BUILDING_TICK_REDUCER,
  BUILD_BUILDING,
  BUILD_BUILDING_REDUCER
} from "../actions/buildings-actions";

import {
  META_SAVE,
  META_SAVE_REDUCER,
  META_LOAD,
  META_LOAD_REDUCER,
  META_CLEAR,
  META_CLEAR_REDUCER
} from "../actions/meta-actions";

import BuildingFactory from "../../Mechanic/Buildings/BuildingFactory";

var sessionStorage = localStorage.getItem("Reactor");
var initialState = {};
if (sessionStorage != null) {
  initialState = {
    ressources: JSON.parse(sessionStorage).ressources,
    buildings: JSON.parse(sessionStorage).buildings.map(
      (buildingMeta, index) => {
        return BuildingFactory(buildingMeta, index);
      }
    )
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
    buildings: buildings.map((buildingMeta, index) => {
      return BuildingFactory(buildingMeta, index);
    })
  };
}

export default function(state = initialState, action) {
  switch (action.type) {
    case BUILDINGS_TICK: {
      return BUILDING_TICK_REDUCER(state, action);
      break;
    }
    case BUILD_BUILDING: {
      return BUILD_BUILDING_REDUCER(state, action);
      break;
    }
    case META_SAVE: {
      return META_SAVE_REDUCER(state, action);
      break;
    }
    case META_LOAD: {
      return META_LOAD_REDUCER(state, action);
      break;
    }
    case META_CLEAR: {
      return META_CLEAR_REDUCER(state, action);
      break;
    }
    default:
      return state;
  }
}
