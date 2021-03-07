/**
 *
 * Asynchronously loads the component for SuggestionPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const SuggestionPage = lazyLoad(
  () => import('./index'),
  module => module.SuggestionPage,
);
