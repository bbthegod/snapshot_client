import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import serialize from 'utils/serialize';
import { postDetailActions as actions } from '.';
let lastGetCommentState = {};
let lastState = {};

export function* get(payload) {
  try {
    lastState = payload.payload;
    const respone = yield call(request, {
      method: 'GET',
      url: `/post/${payload.payload}`,
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
      url: `/follow`,
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

export function* like(payload) {
  try {
    const respone = yield call(request, {
      method: 'POST',
      url: `/like`,
      data: { postId: payload.payload },
    });
    if (respone) {
      yield put(actions.likeSuccess(respone));
    } else {
      yield put(actions.likeFailures());
    }
  } catch (err) {
    yield put(actions.likeFailures());
  }
}

export function* comment(payload) {
  try {
    const respone = yield call(request, {
      method: 'POST',
      url: `/comment/${payload.payload.postId}`,
      data: { content: payload.payload.content, mention: payload.payload.mention },
    });
    if (respone) {
      yield put(actions.commentSuccess());
      yield put(actions.getComment(lastGetCommentState));
    } else {
      yield put(actions.commentFailures());
    }
  } catch (err) {
    yield put(actions.commentFailures());
  }
}

export function* commentReply(payload) {
  try {
    const respone = yield call(request, {
      method: 'POST',
      url: `/commentReply/${payload.payload.commentId}`,
      data: { content: payload.payload.content, mention: payload.payload.mention },
    });
    if (respone) {
      yield put(actions.commentReplySuccess());
      yield put(actions.getComment(lastGetCommentState));
    } else {
      yield put(actions.commentReplyFailures());
    }
  } catch (err) {
    yield put(actions.commentReplyFailures());
  }
}

export function* getComment(payload) {
  try {
    lastGetCommentState = payload.payload;
    const respone = yield call(request, {
      method: 'GET',
      url: `/comment/${payload.payload.id}?${serialize(payload.payload.query)}`,
    });
    if (respone) {
      yield put(actions.getCommentSuccess(respone));
    } else {
      yield put(actions.getCommentFailures());
    }
  } catch (err) {
    yield put(actions.getCommentFailures());
  }
}

export function* remove(payload) {
  try {
    const respone = yield call(request, {
      method: 'DELETE',
      url: `/comment/${payload.payload}`,
    });
    if (respone) {
      yield put(actions.removeSuccess());
      yield put(actions.getComment(lastGetCommentState));
    } else {
      yield put(actions.removeFailures());
    }
  } catch (err) {
    yield put(actions.removeFailures());
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

export function* edit(payload) {
  try {
    const respone = yield call(request, {
      method: 'PUT',
      url: `/post/${payload.payload.id}`,
      data: { caption: payload.payload.caption },
    });
    if (respone) {
      yield put(actions.reportSuccess());
      yield put(actions.get(lastState));
    } else {
      yield put(actions.reportFailures());
    }
  } catch (err) {
    yield put(actions.reportFailures());
  }
}

export function* editComment(payload) {
  try {
    const respone = yield call(request, {
      method: 'PUT',
      url: `/comment/${payload.payload.id}`,
      data: { content: payload.payload.content },
    });
    if (respone) {
      yield put(actions.reportSuccess());
      yield put(actions.getComment(lastGetCommentState));
    } else {
      yield put(actions.reportFailures());
    }
  } catch (err) {
    yield put(actions.reportFailures());
  }
}

export function* removePost(payload) {
  try {
    const respone = yield call(request, {
      method: 'DELETE',
      url: `/post/${payload.payload.id}`,
    });
    if (respone) {
      yield put(actions.removePostSuccess());
    } else {
      yield put(actions.removePostFailures());
    }
  } catch (err) {
    yield put(actions.removePostFailures());
  }
}

export function* postDetailSaga() {
  yield takeLatest(actions.get.type, get);
  yield takeLatest(actions.getComment.type, getComment);
  yield takeLatest(actions.follow.type, follow);
  yield takeLatest(actions.like.type, like);
  yield takeLatest(actions.comment.type, comment);
  yield takeLatest(actions.commentReply.type, commentReply);
  yield takeLatest(actions.remove.type, remove);
  yield takeLatest(actions.report.type, report);
  yield takeLatest(actions.edit.type, edit);
  yield takeLatest(actions.editComment.type, editComment);
  yield takeLatest(actions.removePost.type, removePost);
}
