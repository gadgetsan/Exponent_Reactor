import { combineReducers } from "redux";
import productsReducer from "./products-reducer";
import cartReducer from "./cart-reducer";
import buildingsReducer from "./buildings-reducer";
import ressourcesReducer from "./ressources-reducer";

const allReducers = {
  products: productsReducer,
  shoppingCart: cartReducer,
  buildings: buildingsReducer,
  ressources: ressourcesReducer
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;
