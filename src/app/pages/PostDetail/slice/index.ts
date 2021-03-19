import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { postDetailSaga } from './saga';
import { PostDetailState } from './types';

export const initialState: PostDetailState = {
  data: undefined,
  comments: undefined,
  following: undefined,
  liked: undefined,
  loading: false,
  success: false,
  failures: false,
  postSuccess: false,
  postFailures: false,
};

const slice = createSlice({
  name: 'postDetail',
  initialState,
  reducers: {
    get(state, payload) {
      state.loading = true;
      state.postSuccess = false;
      state.postFailures = false;
    },
    getSuccess(state, action) {
      state.data = action.payload;
      state.following = action.payload.isUserFollowing;
      state.liked = action.payload.isUserLiked;
      state.loading = false;
      state.postSuccess = true;
      state.postFailures = false;
    },
    getFailures(state) {
      state.loading = false;
      state.postSuccess = false;
      state.postFailures = true;
    },
    follow(state, payload) {
      state.loading = true;
      state.success = false;
      state.failures = false;
    },
    followSuccess(state, action) {
      state.following = action.payload.status;
      state.loading = false;
      state.success = true;
      state.failures = false;
    },
    followFailures(state) {
      state.loading = false;
      state.success = false;
      state.failures = true;
    },
    getComment(state, payload) {
      state.loading = true;
      state.success = false;
      state.failures = false;
    },
    getCommentSuccess(state, action) {
      state.comments = action.payload.data;
      state.loading = false;
      state.success = true;
      state.failures = false;
    },
    getCommentFailures(state) {
      state.loading = false;
      state.success = false;
      state.failures = true;
    },
    like(state, payload) {
      state.loading = true;
      state.success = false;
      state.failures = false;
    },
    likeSuccess(state, action) {
      state.liked = action.payload.status;
      state.loading = false;
      state.success = true;
      state.failures = false;
    },
    likeFailures(state) {
      state.loading = false;
      state.success = false;
      state.failures = true;
    },
    comment(state, payload) {
      state.loading = true;
      state.success = false;
      state.failures = false;
    },
    commentSuccess(state) {
      state.loading = false;
      state.success = true;
      state.failures = false;
    },
    commentFailures(state) {
      state.loading = false;
      state.success = false;
      state.failures = true;
    },
    commentReply(state, payload) {
      state.loading = true;
      state.success = false;
      state.failures = false;
    },
    commentReplySuccess(state) {
      state.loading = false;
      state.success = true;
      state.failures = false;
    },
    commentReplyFailures(state) {
      state.loading = false;
      state.success = false;
      state.failures = true;
    },
    remove(state, payload) {
      state.loading = true;
      state.success = false;
      state.failures = false;
    },
    removeSuccess(state) {
      state.loading = false;
      state.success = true;
      state.failures = false;
    },
    removeFailures(state) {
      state.loading = false;
      state.success = false;
      state.failures = true;
    },
  },
});

export const { actions: postDetailActions } = slice;

export const usePostDetailSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: postDetailSaga });
  return { actions: slice.actions };
};
