import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { signupPageSaga } from './saga';
import { SignupPageState } from './types';

export const initialState: SignupPageState = {
  loading: false,
  success: false,
  failures: false,
};

const slice = createSlice({
  name: 'signupPage',
  initialState,
  reducers: {
    signup(state, payload) {
      state.loading = true;
      state.success = false;
      state.failures = false;
    },
    signupSuccess(state) {
      state.loading = false;
      state.success = true;
      state.failures = false;
    },
    signupFailures(state) {
      state.loading = false;
      state.success = false;
      state.failures = true;
    },
    active(state, payload) {
      state.loading = true;
      state.success = false;
      state.failures = false;
    },
    activeSuccess(state) {
      state.loading = false;
      state.success = true;
      state.failures = false;
    },
    activeFailures(state) {
      state.loading = false;
      state.success = false;
      state.failures = true;
    },
    resend(state, payload) {
      state.loading = true;
      state.success = false;
      state.failures = false;
    },
    resendSuccess(state) {
      state.loading = false;
      state.success = true;
      state.failures = false;
    },
    resendFailures(state) {
      state.loading = false;
      state.success = false;
      state.failures = true;
    },
  },
});

export const { actions: signupPageActions } = slice;

export const useSignupPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: signupPageSaga });
  return { actions: slice.actions };
};
