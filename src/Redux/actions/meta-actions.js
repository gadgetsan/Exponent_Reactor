export const META_SAVE = "META_SAVE";
export const META_LOAD = "META_LOAD";

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
