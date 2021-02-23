import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.navigator || initialState;

export const selectNavigator = createSelector([selectSlice], state => state);
