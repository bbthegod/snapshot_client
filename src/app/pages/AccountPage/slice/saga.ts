import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import { accountPageActions as actions } from '.';
import { navigatorActions } from '../../Navigator/slice/index';

function buildFormData(formData, data, parentKey) {
  if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
    Object.keys(data).forEach(key => {
      buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
      // );
    });
  } else {
    const value = data == null ? '' : data;

    formData.append(parentKey, value);
  }
}

function jsonToFormData(data) {
  const formData = new FormData();
  buildFormData(formData, data, null);
  return formData;
}

async function check() {
  try {
    const response = await request({
      method: 'GET',
      url: `/auth/check`,
    });
    if (response) {
      localStorage.setItem('username', response.username);
      localStorage.setItem('id', response._id);
      localStorage.setItem('avatar', response.avatar);
    }
  } catch (err) {
    console.log(err);
  }
}

export function* get() {
  try {
    const response = yield call(request, {
      method: 'GET',
      url: `/user/info/me`,
    });
    if (response) {
      yield put(actions.getSuccess(response));
    } else {
      yield put(actions.getFailures());
    }
  } catch (err) {
    yield put(actions.getFailures());
  }
}

export function* update(payload) {
  try {
    const response = yield call(request, {
      method: 'PUT',
      url: `/user/info/me`,
      data: payload.payload,
    });
    if (response) {
      yield put(actions.updateSuccess());
      yield put(navigatorActions.openSnackBar('Đã lưu trang cá nhân'));
      check();
    } else {
      yield put(actions.updateFailures());
    }
  } catch (err) {
    yield put(actions.updateFailures());
  }
}

export function* avatar(payload) {
  try {
    const response = yield call(request, {
      method: 'POST',
      url: `/user/avatar/upload`,
      data: jsonToFormData(payload.payload),
    });
    if (response) {
      yield put(actions.avatarSuccess());
      yield put(navigatorActions.openSnackBar('Đã tải lên ảnh đại diện'));
      yield put(actions.get());
      check();
    } else {
      yield put(actions.avatarFailures());
    }
  } catch (err) {
    yield put(actions.avatarFailures());
  }
}

export function* removeAvatar() {
  try {
    const response = yield call(request, {
      method: 'DELETE',
      url: `/user/avatar/remove`,
    });
    if (response) {
      yield put(actions.removeAvatarSuccess());
      yield put(navigatorActions.openSnackBar('Đã gỡ ảnh đại diện'));
      yield put(actions.get());
      check();
    } else {
      yield put(actions.removeAvatarFailures());
    }
  } catch (err) {
    yield put(actions.removeAvatarFailures());
  }
}

export function* password(payload) {
  try {
    if (payload.payload.newPassword === payload.payload.repeatPassword) {
      const response = yield call(request, {
        method: 'POST',
        url: `/user/info/me`,
        data: payload.payload,
      });
      if (response.status === 'ok') {
        yield put(actions.passwordSuccess());
        yield put(navigatorActions.openSnackBar('Đã lưu mật khẩu mới'));
      } else if (response.status === 'unmatch') {
        yield put(navigatorActions.openSnackBar('Mật khẩu cũ không chính xác'));
      } else {
        yield put(actions.passwordFailures());
      }
    } else {
      yield put(navigatorActions.openSnackBar('Vui lòng đảm bảo cả hai mật khẩu khớp nhau.'));
    }
  } catch (err) {
    yield put(actions.passwordFailures());
  }
}

export function* accountPageSaga() {
  yield takeLatest(actions.get.type, get);
  yield takeLatest(actions.update.type, update);
  yield takeLatest(actions.avatar.type, avatar);
  yield takeLatest(actions.removeAvatar.type, removeAvatar);
  yield takeLatest(actions.password.type, password);
}
