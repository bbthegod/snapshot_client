/**
 *
 * Asynchronously loads the component for FeedPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const FeedPage = lazyLoad(
  () => import('./index'),
  module => module.FeedPage,
);
