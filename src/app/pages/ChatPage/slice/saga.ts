import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import serialize from 'utils/serialize';
import { chatPageActions as actions } from '.';

export function* get(payload) {
  try {
    const respone = yield call(request, {
      method: 'GET',
      url: `/chat?${serialize(payload.payload.query)}`,
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

export function* search(payload) {
  try {
    const respone = yield call(request, {
      method: 'GET',
      url: `/chat/search?${serialize(payload.payload)}`,
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

export function* getChat(payload) {
  try {
    const respone = yield call(request, {
      method: 'POST',
      url: `/message`,
      data: { id: payload.payload },
    });
    if (respone) {
      yield put(actions.getChatSuccess(respone));
    } else {
      yield put(actions.getChatFailures());
    }
  } catch (err) {
    yield put(actions.getChatFailures());
  }
}

export function* chatPageSaga() {
  yield takeLatest(actions.get.type, get);
  yield takeLatest(actions.search.type, search);
  yield takeLatest(actions.getChat.type, getChat);
}
