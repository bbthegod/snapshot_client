import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.accountPage || initialState;

export const selectAccountPage = createSelector([selectSlice], state => state);
