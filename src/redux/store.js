import { createStore, applyMiddleware } from "redux";
import { logger } from 'redux-logger'
import reduxThunk from "redux-thunk";
import rootReducer from "./reducers/root-reducer";

const middlewaress = [reduxThunk];

if (process.env.NODE_ENV === "development") {
  middlewaress.push(logger);
}
const store = createStore(rootReducer, applyMiddleware(...middlewaress));

export default store;
