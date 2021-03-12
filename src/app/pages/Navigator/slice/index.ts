import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { navigatorSaga } from './saga';
import { NavigatorState } from './types';

export const initialState: NavigatorState = {
  data: [],
  searchData: [],
  snackbar: false,
  loading: false,
  success: false,
  failures: false,
  message: false,
};

const slice = createSlice({
  name: 'navigator',
  initialState,
  reducers: {
    openSnackBar(state, action) {
      state.snackbar = true;
      state.message = action.payload;
    },
    closeSnackBar(state) {
      state.snackbar = false;
    },
    get(state) {
      state.loading = true;
      state.success = false;
      state.failures = false;
    },
    getSuccess(state, action) {
      state.data = action.payload;
      state.loading = false;
      state.success = true;
      state.failures = false;
    },
    getFailures(state) {
      state.loading = false;
      state.success = false;
      state.failures = true;
    },
    search(state, payload) {
      state.loading = true;
      state.success = false;
      state.failures = false;
    },
    searchSuccess(state, action) {
      state.searchData = action.payload;
      state.loading = false;
      state.success = true;
      state.failures = false;
    },
    searchFailures(state) {
      state.loading = false;
      state.success = false;
      state.failures = true;
    },
  },
});

export const { actions: navigatorActions } = slice;

export const useNavigatorSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: navigatorSaga });
  return { actions: slice.actions };
};
