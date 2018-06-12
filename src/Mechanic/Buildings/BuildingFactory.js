import Building from "./Building";
import Lab from "./Lab";

module.exports = function BuildingFactory(meta, id) {
  if (meta.type == undefined) {
    return new Building(meta, id);
  } else if (meta.type == "lab") {
    return new Lab(meta, id);
  }
};
