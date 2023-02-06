// NOTE: use this store variable to create a store.
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";
import { Cartreducer } from "./CartReducer/CartReducer";
import { FillterReducer } from "./FillterReducer/FillterReducer";
import { Appreducer } from "./AppReducer/Appreducer";

const rootReduser = combineReducers({
  Cartreducer: Cartreducer,
  Fillters: FillterReducer,
  Appreducer: Appreducer,
});

// const composeEnhaneser =
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) || compose;

export const store = legacy_createStore(
  rootReduser,
  applyMiddleware(thunk)
  // composeEnhaneser(applyMiddleware(thunk))
);
