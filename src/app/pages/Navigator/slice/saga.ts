import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import { navigatorActions as actions } from '.';

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

export function* post(payload) {
  try {
    const respone = yield call(request, {
      method: 'POST',
      url: `/post/`,
      data: {
        img: payload.payload.img,
        caption: payload.payload.caption,
      },
    });
    if (respone) {
      yield put(actions.postSuccess());
    } else {
      yield put(actions.postFailures());
    }
  } catch (err) {
    yield put(actions.postFailures());
  }
}

export function* navigatorSaga() {
  yield takeLatest(actions.search.type, search);
  yield takeLatest(actions.getNoti.type, getNoti);
  yield takeLatest(actions.post.type, post);
}
