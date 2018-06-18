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

import * as BUILDINGS_ACTIONS from "../actions/buildings-actions";

import * as META_ACTIONS from "../actions/meta-actions";

import BuildingFactory from "../../Mechanic/Buildings/BuildingFactory";
import RessourceFactory from "../../Mechanic/Ressources/RessourceFactory";

var sessionStorage = localStorage.getItem("Reactor");
var initialState = {};

if (sessionStorage != null) {
  initialState = {
    ressources: JSON.parse(sessionStorage).ressources.map(
      (ressourceMeta, index) => {
        return RessourceFactory(ressourceMeta, index);
      }
    ),
    buildings: JSON.parse(sessionStorage).buildings.map(
      (buildingMeta, index) => {
        return BuildingFactory(buildingMeta, index);
      }
    ),
    population: JSON.parse(sessionStorage).population
  };
} else {
  var fs = require("fs");
  var buildings = JSON.parse(
    fs.readFileSync("../../data/buildings.json", "utf8")
  );
  var ressources = JSON.parse(
    fs.readFileSync("../../data/ressources.json", "utf8")
  );
  var population = JSON.parse(
    fs.readFileSync("../../data/population.json", "utf8")
  );
  initialState = {
    ressources: ressources.map((ressourceMeta, index) => {
      return RessourceFactory(ressourceMeta, index);
    }),
    buildings: buildings.map((buildingMeta, index) => {
      return BuildingFactory(buildingMeta, index);
    }),
    population: population
  };
}

export default function(state = initialState, action) {
  switch (action.type) {
    case BUILDINGS_ACTIONS.TICK: {
      return BUILDINGS_ACTIONS.TICK_REDUCER(state, action);
      break;
    }
    case BUILDINGS_ACTIONS.BUILD: {
      return BUILDINGS_ACTIONS.BUILD_REDUCER(state, action);
      break;
    }
    case META_ACTIONS.SAVE: {
      return META_ACTIONS.SAVE_REDUCER(state, action);
      break;
    }
    case META_ACTIONS.LOAD: {
      return META_ACTIONS.LOAD_REDUCER(state, action);
      break;
    }
    case META_ACTIONS.CLEAR: {
      return META_ACTIONS.CLEAR_REDUCER(state, action);
      break;
    }
    default:
      return state;
  }
}
