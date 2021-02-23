import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import { profilePageActions as actions } from '.';

export function* get(payload) {
  try {
    const respone = yield call(request, {
      method: 'GET',
      url: `/user/profile/${payload.payload}`,
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

export function* getPost(payload) {
  try {
    const respone = yield call(request, {
      method: 'GET',
      url: `/post/user/${payload.payload}`,
    });
    if (respone) {
      yield put(actions.getPostSuccess(respone));
    } else {
      yield put(actions.getPostFailures());
    }
  } catch (err) {
    yield put(actions.getPostFailures());
  }
}

export function* profilePageSaga() {
  yield takeLatest(actions.get.type, get);
  yield takeLatest(actions.getPost.type, getPost);
}
