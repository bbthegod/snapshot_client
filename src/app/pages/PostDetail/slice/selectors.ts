import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.postDetail || initialState;

export const selectPostDetail = createSelector([selectSlice], state => state);
