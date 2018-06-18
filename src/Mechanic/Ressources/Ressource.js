import React from "react";

module.exports = class Ressource {
  constructor(meta, id) {
    this.name = meta.name;
    this.quantity = meta.quantity;
    this.unit = meta.unit;
    this.icon = meta.icon;
    this.color = meta.color;
    this.quota = meta.quota != undefined ? parseInt(meta.quota) : 0;
    this.id = meta.id;
  }

  //retourne false si on n'as plus de place
  fill(quantity) {
    if (quantity == 0) {
      return;
    }
    if (this.quantity + quantity < this.quota || this.quota == 0) {
      this.quantity += quantity;
      console.log("NOT FULL");
      return true;
    } else {
      this.quantity = this.quota;
      console.log("IS FULL");
      return false;
    }
  }
};
