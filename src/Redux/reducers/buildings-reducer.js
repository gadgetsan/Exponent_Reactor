import { BUILDINGS_TICK } from "../actions/buildings-actions";

var fs = require("fs");
var initialState = JSON.parse(
  fs.readFileSync("../../data/buildings.json", "utf8")
);

export default function(state = initialState, action) {
  switch (action.type) {
    case BUILDINGS_TICK: {
      console.dir(state);
      return state;
    }
    default:
      return state;
  }
}
