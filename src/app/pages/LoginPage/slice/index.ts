import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { loginPageSaga } from './saga';
import { LoginPageState } from './types';

export const initialState: LoginPageState = {
  loading: false,
  success: false,
  failures: false,
};

const slice = createSlice({
  name: 'loginPage',
  initialState,
  reducers: {
    login(state, payload) {
      state.loading = true;
      state.success = false;
      state.failures = false;
    },
    loginSuccess(state) {
      state.loading = false;
      state.success = true;
      state.failures = false;
    },
    loginFailures(state) {
      state.loading = false;
      state.success = false;
      state.failures = true;
    },
  },
});

export const { actions: loginPageActions } = slice;

export const useLoginPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: loginPageSaga });
  return { actions: slice.actions };
};
