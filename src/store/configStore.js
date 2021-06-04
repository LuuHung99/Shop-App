import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "../reducers/index";
import rootSaga from "../sagas/index";
import {persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const configRootCartPersits = {
  key: "root-persist-config",
  storage,
  whitelist: ["cartReducer"],
};

const rootReducerPersitCart = persistReducer(
  configRootCartPersits,
  rootReducer
);

//create the saga Middleware
const sagaMiddleware = createSagaMiddleware();

const configStore = (loadState = {}) => {
  const store = createStore(
    rootReducerPersitCart,
    loadState,
    applyMiddleware(
      sagaMiddleware,
      logger //log ra nhung su kien
    )
  );
  sagaMiddleware.run(rootSaga);
  const persistor = persistStore(store);
  return { store, persistor };
};

export default configStore;
