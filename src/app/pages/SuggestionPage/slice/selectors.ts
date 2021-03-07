import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.suggestionPage || initialState;

export const selectSuggestionPage = createSelector([selectSlice], state => state);
