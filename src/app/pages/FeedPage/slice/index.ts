import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { feedPageSaga } from './saga';
import { FeedPageState } from './types';

export const initialState: FeedPageState = {
  posts: [],
  suggests: [],
  loading: false,
  success: false,
  failures: false,
};

const slice = createSlice({
  name: 'feedPage',
  initialState,
  reducers: {
    get(state) {
      state.loading = true;
      state.success = false;
      state.failures = false;
    },
    getSuccess(state, action) {
      state.posts = action.payload;
      state.loading = false;
      state.success = true;
      state.failures = false;
    },
    getFailures(state) {
      state.loading = false;
      state.success = false;
      state.failures = true;
    },
    follow(state, payload) {
      state.loading = true;
      state.success = false;
      state.failures = false;
    },
    followSuccess(state, action) {
      state.loading = false;
      state.success = true;
      state.failures = false;
    },
    followFailures(state) {
      state.loading = false;
      state.success = false;
      state.failures = true;
    },
    getSuggestion(state) {
      state.loading = true;
      state.success = false;
      state.failures = false;
    },
    getSuggestionSuccess(state, action) {
      state.suggests = action.payload;
      state.loading = false;
      state.success = true;
      state.failures = false;
    },
    getSuggestionFailures(state) {
      state.loading = false;
      state.success = false;
      state.failures = true;
    },
  },
});

export const { actions: feedPageActions } = slice;

export const useFeedPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: feedPageSaga });
  return { actions: slice.actions };
};
