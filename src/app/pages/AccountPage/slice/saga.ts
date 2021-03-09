import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import { accountPageActions as actions } from '.';

export function* get() {
  try {
    const respone = yield call(request, {
      method: 'GET',
      url: `/user/info/me`,
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

export function* update(payload) {
  try {
    const respone = yield call(request, {
      method: 'PUT',
      url: `/user/info/me`,
      data: payload.payload,
    });
    if (respone) {
      yield put(actions.updateSuccess());
      alert('Đã lưu trang cá nhân.');
    } else {
      yield put(actions.updateFailures());
    }
  } catch (err) {
    yield put(actions.updateFailures());
  }
}

export function* accountPageSaga() {
  yield takeLatest(actions.get.type, get);
  yield takeLatest(actions.update.type, update);
}
