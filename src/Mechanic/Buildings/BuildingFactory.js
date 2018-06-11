import Building from "./Building";
import Lab from "./Lab";

module.exports = function BuildingFactory(meta) {
  if (meta.type == undefined) {
    return new Building(meta);
  } else if (meta.type == "lab") {
    return new Lab(meta);
  }
};
