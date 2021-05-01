import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import movieReducer from "./movieReducer";

const rootReducer = combineReducers({
  movie: movieReducer,
});
const composeEnhancers = compose;

export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
