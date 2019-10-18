/**
 *
 * Asynchronously loads the component for Articles
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
