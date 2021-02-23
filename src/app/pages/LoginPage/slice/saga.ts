import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import { loginPageActions as actions } from '.';

export function* login(payload) {
  try {
    const respone = yield call(request, {
      url: '/auth/login',
      method: 'POST',
      data: {
        email: payload.payload.email,
        password: payload.payload.password,
      },
    });
    if (respone) {
      yield put(actions.loginSuccess());
      localStorage.setItem('token', respone.token);
      localStorage.setItem('username', respone.user.username);
      localStorage.setItem('id', respone.user.id);
      localStorage.setItem('avatar', respone.user.avatar);
    } else {
      yield put(actions.loginFailures());
    }
  } catch (err) {
    yield put(actions.loginFailures());
  }
}

export function* loginPageSaga() {
  yield takeLatest(actions.login.type, login);
}
