// import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';

// import { authReducer } from '../reducer/authReducer';

// const composeEnhancers =
//   (typeof window !== 'undefined' &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const reducers = combineReducers({
//   auth: authReducer,
// });

// export const store = createStore(
//   reducers,
//   composeEnhancers(applyMiddleware(thunk))
// );

import { createStore, combineReducers } from 'redux';
// import { authReducer } from './authReducer';
import { authReducer } from '../reducer/authReducer';

const allReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };