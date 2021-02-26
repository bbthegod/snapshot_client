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

export function* getSuggestion(payload) {
  try {
    const respone = yield call(request, {
      method: 'GET',
      url: `/follow`,
    });
    if (respone) {
      yield put(actions.getSuggestionSuccess(respone));
    } else {
      yield put(actions.getSuggestionFailures());
    }
  } catch (err) {
    yield put(actions.getSuggestionFailures());
  }
}
export function* feedPageSaga() {
  yield takeLatest(actions.get.type, get);
  yield takeLatest(actions.getSuggestion.type, getSuggestion);
}
