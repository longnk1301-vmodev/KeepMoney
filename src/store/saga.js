import {call, put, takeLatest, all} from 'redux-saga/effects';
import Actions from './actions';
// import ServiceLocator, {services} from '../services/serviceLocator';
// import {loadAppEnv} from '../utils/env';

let devicesService = null;

// loadAppEnv().then(() => {});

const generatorToPromise = fn => () => {
  return new Promise(resolve => {
    const data = fn;
    resolve(data);
  });
};

function* loginUser(action) {
  try {
    yield put(Actions['LOGIN_USER/FETCH_SUCCESSFUL']({}));
  } catch (error) {}
}

function* loginSaga() {
  yield takeLatest(Actions['LOGIN_USER/FETCH'], loginUser);
}

export default function* rootSaga() {
  yield all([loginSaga()]);
}
