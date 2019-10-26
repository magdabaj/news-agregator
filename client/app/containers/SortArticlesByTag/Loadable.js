/**
 *
 * Asynchronously loads the component for SortArticlesByTag
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
