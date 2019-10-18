/**
 *
 * Asynchronously loads the component for LoginPage
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('client/app/containers/LoginPage/index'));
