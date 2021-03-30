import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import serialize from 'utils/serialize';
import { feedPageActions as actions } from '.';
let lastQuery = {};

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
    lastQuery = payload;
    const respone = yield call(request, {
      method: 'GET',
      url: `/follow?${serialize(payload.payload.query)}`,
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

export function* follow(payload) {
  try {
    const respone = yield call(request, {
      method: 'POST',
      url: `/follow/`,
      data: { followingId: payload.payload },
    });
    if (respone) {
      yield put(actions.followSuccess(respone));
      yield put(actions.getSuggestion(lastQuery));
    } else {
      yield put(actions.followFailures());
    }
  } catch (err) {
    yield put(actions.followFailures());
  }
}

export function* report(payload) {
  try {
    const respone = yield call(request, {
      method: 'POST',
      url: `/report/`,
      data: { object: payload.payload.object, reasons: payload.payload.reasons },
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

export function* feedPageSaga() {
  yield takeLatest(actions.get.type, get);
  yield takeLatest(actions.getSuggestion.type, getSuggestion);
  yield takeLatest(actions.follow.type, follow);
  yield takeLatest(actions.report.type, report);
}
