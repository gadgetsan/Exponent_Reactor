import Ressource from "./Ressource";

module.exports = function RessourceFactory(meta, id) {
  if (meta.type == undefined) {
    return new Ressource(meta, id);
  }
};
