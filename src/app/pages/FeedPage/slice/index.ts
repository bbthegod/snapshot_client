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
  out: false,
};

const slice = createSlice({
  name: 'feedPage',
  initialState,
  reducers: {
    get(state, payload) {
      state.loading = true;
      state.success = false;
      state.failures = false;
    },
    getSuccess(state, action) {
      if (!action.payload.length) {
        state.out = true;
      } else {
        state.posts = [...state.posts, ...action.payload];
      }
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
    getSuggestion(state, action) {
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
    report(state, payload) {
      state.loading = true;
      state.success = false;
      state.failures = false;
    },
    reportSuccess(state) {
      state.loading = false;
      state.success = true;
      state.failures = false;
    },
    reportFailures(state) {
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
