// import { createStore } from 'redux'
// import rootReducer from './reducer'

// const store = createStore(rootReducer)

// export default store;

//******************************************************* */ EL ANTERIOR

// import { createStore, compose, applyMiddleware } from "redux";
// import thunkMiddleware from "redux-thunk";
// import reducer from "./reducer";

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
// //esta linea sirve para conectar nuestra app con la extencion
// //Redux Devtools del navegador

// const store = createStore(
//   reducer,
//   composeEnhancer(applyMiddleware(thunkMiddleware))
// );

// export default store;
//******************************************************************** */ PARA PROBAR

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import thunk from "redux-thunk";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

  const store = createStore(
    rootReducer,
    composeEnhancers (applyMiddleware(thunk))
  );
  export default store;