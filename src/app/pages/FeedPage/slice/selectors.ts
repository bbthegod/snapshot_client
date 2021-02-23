import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.feedPage || initialState;

export const selectFeedPage = createSelector([selectSlice], state => state);
