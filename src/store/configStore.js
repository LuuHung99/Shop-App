import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "../reducers/index";
import rootSaga from "../sagas/index";

//create the saga Middleware
const sagaMiddleware = createSagaMiddleware();

const configStore = (loadState = {}) => {
  const store = createStore(
    rootReducer,
    loadState,
    applyMiddleware(
      sagaMiddleware,
      logger //log ra nhung su kien
    )
  );
  sagaMiddleware.run(rootSaga);
  return { store};
};

export default configStore;