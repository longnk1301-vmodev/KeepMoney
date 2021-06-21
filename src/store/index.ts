import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootSaga from './saga';
const saga = createSagaMiddleware();

//redux dev tool
const composeEnhancers = composeWithDevTools({});
const enhancer = composeEnhancers(applyMiddleware(saga));

const store = createStore(reducer, enhancer);

saga.run(rootSaga);

export default store;
