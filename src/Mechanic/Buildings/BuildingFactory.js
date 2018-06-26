import Building from "./Building";
import Lab from "./Lab";
import Storage from "./Storage";
import Upgrader from "./Upgrader";

module.exports = function BuildingFactory(meta, id) {
  if (meta.type == undefined) {
    return new Building(meta, id);
  } else if (meta.type == "Lab") {
    return new Lab(meta, id);
  } else if (meta.type == "Storage") {
    return new Storage(meta, id);
  } else if (meta.type == "Upgrader") {
    return new Upgrader(meta, id);
  }
};
