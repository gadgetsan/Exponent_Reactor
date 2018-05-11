import { createStore } from "redux";
import Reducers from "./Reducers";

const store = createStore(Reducers);

module.exports = store;
