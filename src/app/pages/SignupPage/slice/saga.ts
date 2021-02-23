import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import { signupPageActions as actions } from '.';

export function* signup(payload) {
  try {
    const respone = yield call(request, {
      url: '/auth/signup',
      method: 'POST',
      data: {
        email: payload.payload.email,
        username: payload.payload.username,
        name: payload.payload.name,
        password: payload.payload.password,
      },
    });
    if (respone) {
      yield put(actions.signupSuccess());
    } else {
      yield put(actions.signupFailures());
    }
  } catch (err) {
    yield put(actions.signupFailures());
  }
}

export function* active(payload) {
  try {
    const respone = yield call(request, {
      url: '/auth/active',
      method: 'POST',
      data: {
        email: payload.payload.email,
        code: payload.payload.code,
      },
    });
    if (respone) {
      yield put(actions.activeSuccess());
      localStorage.setItem('token', respone.token);
      localStorage.setItem('username', respone.user.username);
      localStorage.setItem('id', respone.user.id);
      localStorage.setItem('avatar', respone.user.avatar);
    } else {
      yield put(actions.activeFailures());
    }
  } catch (err) {
    yield put(actions.activeFailures());
  }
}

export function* resend(payload) {
  try {
    const respone = yield call(request, {
      url: '/auth/resend',
      method: 'POST',
      data: {
        email: payload.payload.email,
        code: payload.payload.code,
      },
    });
    if (respone) {
      yield put(actions.resendSuccess());
    } else {
      yield put(actions.resendFailures());
    }
  } catch (err) {
    yield put(actions.resendFailures());
  }
}

export function* signupPageSaga() {
  yield takeLatest(actions.signup.type, signup);
  yield takeLatest(actions.active.type, active);
  yield takeLatest(actions.resend.type, resend);
}
