import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { accountPageSaga } from './saga';
import { AccountPageState } from './types';

export const initialState: AccountPageState = {
  user: {},
  loading: false,
  success: false,
  failures: false,
};

const slice = createSlice({
  name: 'accountPage',
  initialState,
  reducers: {
    get(state) {
      state.loading = true;
      state.success = false;
      state.failures = false;
    },
    getSuccess(state, action) {
      state.user = action.payload;
      state.loading = false;
      state.success = true;
      state.failures = false;
    },
    getFailures(state) {
      state.loading = false;
      state.success = false;
      state.failures = true;
    },
    update(state, payload) {
      state.loading = true;
      state.success = false;
      state.failures = false;
    },
    updateSuccess(state) {
      state.loading = false;
      state.success = true;
      state.failures = false;
    },
    updateFailures(state) {
      state.loading = false;
      state.success = false;
      state.failures = true;
    },
  },
});

export const { actions: accountPageActions } = slice;

export const useAccountPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: accountPageSaga });
  return { actions: slice.actions };
};
