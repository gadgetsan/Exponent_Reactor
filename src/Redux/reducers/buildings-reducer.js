var fs = require("fs");
var initialState = JSON.parse(
  fs.readFileSync("../../data/buildings.json", "utf8")
);

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
