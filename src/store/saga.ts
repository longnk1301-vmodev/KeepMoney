/* eslint-disable @typescript-eslint/no-unused-vars */
import {call, put, takeLatest, all} from 'redux-saga/effects';
import Actions from './actions';
import ServiceLocator, {services} from '../services/serviceLocator';
import {loadAppEnv} from '../utils/env';
import {CALL_SUCCESS} from '../constants/Common';

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

function* loginUser(action: any) {
  const {username, password} = action.payload;

  const response = yield call(
    generatorToPromise(mockService.signIn(username, password)),
  );

  if (response.message === CALL_SUCCESS) {
    yield put(
      Actions['SIGN_IN_USER/FETCH_SUCCESSFUL']({userInfo: response.data}),
    );
  }
}

function* loginSaga() {
  yield takeLatest(Actions['SIGN_IN_USER/FETCH'], loginUser);
}

function* signUpUser(action: any) {
  const {username, password, confirmPassword} = action.payload;

  const response = yield call(
    generatorToPromise(mockService.signUp(username, password, confirmPassword)),
  );

  if (response.message === CALL_SUCCESS) {
    yield put(Actions['SIGN_UP/FETCH_SUCCESSFUL']({userInfo: response.data}));
  }
}

function* signUpSaga() {
  yield takeLatest(Actions['SIGN_UP/FETCH'], signUpUser);
}

export default function* rootSaga() {
  yield all([loginSaga(), signUpSaga()]);
}
