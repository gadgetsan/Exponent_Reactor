export const META_SAVE = "META_SAVE";
export const META_LOAD = "META_LOAD";
export const META_CLEAR = "META_CLEAR";
import BuildingFactory from "../../Mechanic/Buildings/BuildingFactory";

export function saveGame() {
  return {
    type: META_SAVE
  };
}

export function loadGame() {
  return {
    type: META_LOAD
  };
}

export function clearGame() {
  return {
    type: META_CLEAR
  };
}
export function META_SAVE_REDUCER(state, action) {
  console.log("SAVE");
  var mutatedState = JSON.parse(JSON.stringify(state));

  var sessionObject = JSON.stringify({
    ressources: state.ressources,
    buildings: state.buildings
  });

  localStorage.setItem("Reactor", sessionObject);
}

export function META_LOAD_REDUCER(state, action) {
  console.log("LOAD");
  var mutatedState = Object.assign({}, state);
  var loadedData = JSON.parse(localStorage.getItem("Reactor"));
  return {
    ...state,
    ressources: loadedData.ressources.map(ressource => {
      return ressource;
    }),
    buildings: loadedData.buildings.map(buildingMeta => {
      return BuildingFactory(buildingMeta);
    })
  };
}

export function META_CLEAR_REDUCER(state, action) {
  console.log("CLEAR");
  localStorage.removeItem("Reactor");
  return {
    ...state
  };
}
