import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import { navigatorActions as actions } from '.';

export function* get() {
  try {
    const respone = yield call(request, { url: 'https://jsonplaceholder.typicode.com/posts', method: 'GET' });
    if (respone) {
      yield put(actions.getSuccess(respone));
    } else {
      yield put(actions.getFailures());
    }
  } catch (err) {
    yield put(actions.getFailures());
  }
}

export function* search(payload) {
  try {
    const respone = yield call(request, {
      method: 'GET',
      url: `/user/search/user?username=${payload.payload}`,
    });
    if (respone) {
      yield put(actions.searchSuccess(respone));
    } else {
      yield put(actions.searchFailures());
    }
  } catch (err) {
    yield put(actions.searchFailures());
  }
}

export function* getNoti() {
  try {
    const respone = yield call(request, {
      method: 'GET',
      url: `/notification/`,
    });
    if (respone) {
      yield put(actions.getNotiSuccess(respone));
    } else {
      yield put(actions.getNotiFailures());
    }
  } catch (err) {
    yield put(actions.getNotiFailures());
  }
}

export function* navigatorSaga() {
  yield takeLatest(actions.get.type, get);
  yield takeLatest(actions.search.type, search);
  yield takeLatest(actions.getNoti.type, getNoti);
}
