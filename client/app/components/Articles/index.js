/**
 *
 * Articles
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Articles() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Articles.propTypes = {};

export default memo(Articles);
