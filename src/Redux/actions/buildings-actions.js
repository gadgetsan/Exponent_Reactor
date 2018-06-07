export const BUILDINGS_TICK = "BUILDINGS_TICK";
export const BUILD_BUILDING = "BUILD_BUILDING";

export function buildingTick(time) {
  return {
    type: BUILDINGS_TICK,
    payload: { time }
  };
}

export function buildBuilding(buildingId) {
  return {
    type: BUILD_BUILDING,
    payload: { buildingId }
  };
}
