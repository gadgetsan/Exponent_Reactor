export const SAVE = "META_SAVE";
export const LOAD = "META_LOAD";
export const CLEAR = "META_CLEAR";
import BuildingFactory from "../../Mechanic/Buildings/BuildingFactory";
import RessourceFactory from "../../Mechanic/Ressources/RessourceFactory";

export function saveGame() {
  return {
    type: SAVE
  };
}

export function loadGame() {
  return {
    type: LOAD
  };
}

export function clearGame() {
  return {
    type: CLEAR
  };
}
export function SAVE_REDUCER(state, action) {
  console.log("SAVE");
  var mutatedState = JSON.parse(JSON.stringify(state));

  var sessionObject = JSON.stringify({
    ressources: state.ressources,
    buildings: state.buildings,
    population: state.population
  });

  localStorage.setItem("Reactor", sessionObject);
}

export function LOAD_REDUCER(state, action) {
  console.log("LOAD");
  var mutatedState = Object.assign({}, state);
  var loadedData = JSON.parse(localStorage.getItem("Reactor"));
  return {
    ...state,
    ressources: loadedData.ressources.map((ressourceMeta, id) => {
      return RessourceFactory(ressourceMeta, id);
    }),
    buildings: loadedData.buildings.map((buildingMeta, id) => {
      return BuildingFactory(buildingMeta, id);
    }),
    population: loadedData.buildings.map(people => {
      return people;
    })
  };
}

export function CLEAR_REDUCER(state, action) {
  console.log("CLEAR");
  localStorage.removeItem("Reactor");
  return {
    ...state
  };
}
