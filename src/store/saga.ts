/* eslint-disable @typescript-eslint/no-unused-vars */
import {put, takeLatest, all} from 'redux-saga/effects';
import Actions from './actions';
import ServiceLocator, {services} from '../services/serviceLocator';
import {loadAppEnv} from '../utils/env';

let mockService = null;

loadAppEnv().then(() => {
  mockService = ServiceLocator.getService(services.mockService);
});

const generatorToPromise = fn => () => {
  return new Promise(resolve => {
    const data = fn;
    resolve(data);
  });
};

function* loginUser() {
  try {
    yield put(Actions['SIGN_IN_USER/FETCH_SUCCESSFUL']({}));
  } catch (error) {}
}

function* loginSaga() {
  yield takeLatest(Actions['SIGN_IN_USER/FETCH'], loginUser);
}

export default function* rootSaga() {
  yield all([loginSaga()]);
}
