/*
 * Articles Messages
 *
 * This contains all the text for the Articles component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Articles';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Articles component!',
  },
});
