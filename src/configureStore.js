import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";

const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware))
  );
}

export default configureStore;
