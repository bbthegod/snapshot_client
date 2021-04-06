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

export function* follow(payload) {
  try {
    const respone = yield call(request, {
      method: 'POST',
      url: `/follow/`,
      data: { followingId: payload.payload },
    });
    if (respone) {
      yield put(actions.followSuccess(respone));
    } else {
      yield put(actions.followFailures());
    }
  } catch (err) {
    yield put(actions.followFailures());
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

export function* getSaved(payload) {
  try {
    const respone = yield call(request, {
      method: 'GET',
      url: `/savedPost/user/${payload.payload}`,
    });
    if (respone) {
      yield put(actions.getSavedSuccess(respone));
    } else {
      yield put(actions.getSavedFailures());
    }
  } catch (err) {
    yield put(actions.getSavedFailures());
  }
}

export function* report(payload) {
  try {
    const respone = yield call(request, {
      method: 'POST',
      url: `/report/`,
      data: { object: payload.payload.object, reasons: payload.payload.reasons, id: payload.payload.id },
    });
    if (respone) {
      yield put(actions.reportSuccess());
    } else {
      yield put(actions.reportFailures());
    }
  } catch (err) {
    yield put(actions.reportFailures());
  }
}

export function* profilePageSaga() {
  yield takeLatest(actions.get.type, get);
  yield takeLatest(actions.getPost.type, getPost);
  yield takeLatest(actions.getSaved.type, getSaved);
  yield takeLatest(actions.follow.type, follow);
  yield takeLatest(actions.report.type, report);
}
