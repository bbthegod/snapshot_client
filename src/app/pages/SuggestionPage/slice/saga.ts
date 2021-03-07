import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import { suggestionPageActions as actions } from '.';

export function* get() {
  try {
    const respone = yield call(request, {
      method: 'GET',
      url: `/follow`,
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

export function* follow(payload) {
  try {
    const respone = yield call(request, {
      method: 'POST',
      url: `/follow/`,
      data: { followingId: payload.payload },
    });
    if (respone) {
      yield put(actions.followSuccess(respone));
      yield put(actions.get());
    } else {
      yield put(actions.followFailures());
    }
  } catch (err) {
    yield put(actions.followFailures());
  }
}

export function* suggestionPageSaga() {
  yield takeLatest(actions.get.type, get);
  yield takeLatest(actions.follow.type, follow);
}
