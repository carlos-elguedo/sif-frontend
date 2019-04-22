import {createStore} from "redux"
// import rootReducers from "../reducers/indexreducers"
//
// const store = createStore(rootReducers)
//
// export default store




// import { createStore, applyMiddleware, compose } from 'redux';
// import createSagaMiddleware from 'redux-saga';

import reducers from './rootReducer';
// import rootSaga from './rootSaga';

// import truevaulMiddleware from './middleware/truevaultMiddleWare';

//this line allows to user redux dev tool on the browser
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducers
  // composeEnhancers(applyMiddleware(truevaulMiddleware, sagaMiddleware))
);
// sagaMiddleware.run(rootSaga);
