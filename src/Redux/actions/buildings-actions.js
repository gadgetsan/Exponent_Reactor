export const TICK = "BUILDINGS_TICK";
export const BUILD = "BUILD_BUILDING";
export const RESEARCH = "RESEARCH_BUILDING";

export function buildingTick(time) {
  return {
    type: TICK,
    payload: { time }
  };
}

export function buildBuilding(buildingId) {
  return {
    type: BUILD,
    payload: { buildingId }
  };
}

export function researchBuilding(researchBuildingId, buildingId) {
  return {
    type: RESEARCH,
    payload: { researchBuildingId, buildingId }
  };
}

export function TICK_REDUCER(state, action) {
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

export function BUILD_REDUCER(state, action) {
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

export function RESEARCH_REDUCER(state, action) {
  var mutatedState = Object.assign({}, state);
  var building = state.buildings[action.payload.buildingId];
  var researchBuilding = state.buildings[action.payload.researchBuildingId];
  console.dir(action);
  mutatedState = building.doResearch(state, mutatedState);
  mutatedState = researchBuilding.doResearch(state, mutatedState);
  return {
    ...state,
    buildings: mutatedState.buildings.map(building => {
      return building;
    })
  };
}
