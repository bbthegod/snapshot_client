import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { profilePageSaga } from './saga';
import { ProfilePageState } from './types';

export const initialState: ProfilePageState = {
  user: {},
  posts: [],
  loading: false,
  success: false,
  failures: false,
};

const slice = createSlice({
  name: 'profilePage',
  initialState,
  reducers: {
    get(state, payload) {
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
    getPost(state, payload) {
      state.loading = true;
      state.success = false;
      state.failures = false;
    },
    getPostSuccess(state, action) {
      state.posts = action.payload;
      state.loading = false;
      state.success = true;
      state.failures = false;
    },
    getPostFailures(state) {
      state.loading = false;
      state.success = false;
      state.failures = true;
    },
  },
});

export const { actions: profilePageActions } = slice;

export const useProfilePageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: profilePageSaga });
  return { actions: slice.actions };
};
