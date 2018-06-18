import React from "react";

module.exports = class Ressource {
  constructor(meta, id) {
    this.name = meta.name;
    this.quantity = meta.quantity;
    this.unit = meta.unit;
    this.icon = meta.icon;
    this.color = meta.color;
    this.quota = meta.quota == undefined ? 0 : meta.quota;
    this.id = meta.id;
  }

  //retourne false si on n'as plus de place
  fill(quantity) {
    if (quantity == 0) {
      return;
    }
    if (this.quantity + quantity < this.quota || this.quota == 0) {
      this.quantity += quantity;
      return true;
    } else {
      this.quantity = this.quota;
      return false;
    }
  }
};
