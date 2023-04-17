import {all} from 'redux-saga/effects';
import {loginSaga, otpSaga, signupSaga, socialLoginSaga} from './AuthSaga';

export function* rootSaga() {
  yield all([loginSaga(), socialLoginSaga(), signupSaga(), otpSaga()]);
}
