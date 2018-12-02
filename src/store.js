import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const middleWares = [thunk];
const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleWares),
    window.__REDUX_DEVTOOLS_EXTIONS__ && window.__REDUX_DEVTOOLS_EXTIONS__()
  )
);

export default store;
