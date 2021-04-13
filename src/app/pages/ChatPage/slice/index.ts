import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { chatPageSaga } from './saga';
import { ChatPageState } from './types';

export const initialState: ChatPageState = {
  chats: [],
  conversation: undefined,
  searchData: [],
  loading: false,
  success: false,
  failures: false,
};

const slice = createSlice({
  name: 'chatPage',
  initialState,
  reducers: {
    get(state, payload) {
      state.loading = true;
      state.success = false;
      state.failures = false;
    },
    getSuccess(state, action) {
      state.chats = action.payload;
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
    getChat(state, payload) {
      state.loading = true;
      state.success = false;
      state.failures = false;
    },
    getChatSuccess(state, action) {
      state.conversation = action.payload;
      state.loading = false;
      state.success = true;
      state.failures = false;
    },
    getChatFailures(state) {
      state.loading = false;
      state.success = false;
      state.failures = true;
    },
  },
});

export const { actions: chatPageActions } = slice;

export const useChatPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: chatPageSaga });
  return { actions: slice.actions };
};
