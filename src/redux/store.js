import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import RootReducers from "./rootReducers";

const store = createStore(RootReducers, applyMiddleware(thunk, logger));
export default store;
