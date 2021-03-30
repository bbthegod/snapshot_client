/**
 * Create the store with dynamic reducers
 */

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createInjectorsEnhancer } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';
import { navigatorActions as actions } from '../app/pages/Navigator/slice';

import { createReducer } from './reducers';

export function configureAppStore() {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  // Create the store with saga middleware
  const middlewares = [sagaMiddleware];

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ];

  const store = configureStore({
    reducer: createReducer(),
    middleware: [
      ...getDefaultMiddleware({
        serializableCheck: {
          // Ignore these action types
          ignoredActions: [actions.post.type],
          // Ignore these field paths in all actions
          ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
          // Ignore these paths in the state
          ignoredPaths: ['items.dates'],
        },
      }),
      ...middlewares,
    ],
    devTools: process.env.NODE_ENV !== 'production',
    enhancers,
  });

  return store;
}
