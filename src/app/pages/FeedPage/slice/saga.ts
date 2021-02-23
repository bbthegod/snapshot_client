import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import { feedPageActions as actions } from '.';

export function* get(payload) {
  try {
    const respone = yield call(request, {
      method: 'GET',
      url: `/feed`,
    });
    if (respone) {
      yield put(actions.getSuccess(respone));
    } else {
      yield put(actions.getFailures());
    }
  } catch (err) {
    yield put(actions.getFailures());
  }
}

export function* feedPageSaga() {
  yield takeLatest(actions.get.type, get);
}
