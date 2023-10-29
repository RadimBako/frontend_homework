"use strict";
const ShoppingListAppAbl = require("../../abl/shoppinglist-app-abl.js");

class ShoppingListAppController {
  init(ucEnv) {
    return ShoppingListAppAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }

  load(ucEnv) {
    return ShoppingListAppAbl.load(ucEnv.getUri(), ucEnv.getSession());
  }

  loadBasicData(ucEnv) {
    return ShoppingListAppAbl.loadBasicData(ucEnv.getUri(), ucEnv.getSession());
  }
}

module.exports = new ShoppingListAppController();
