import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { feedPageSaga } from './saga';
import { FeedPageState } from './types';

export const initialState: FeedPageState = {
  posts: [],
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
      state.posts = action.payload.data;
      state.loading = false;
      state.success = true;
      state.failures = false;
    },
    getFailures(state) {
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
