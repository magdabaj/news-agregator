/**
 *
 * Spinner
 *
 */

import React, { memo } from 'react';
import './index.css';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Spinner() {
  return (
    <div className="container">
      <FormattedMessage {...messages.header} />
      <div className="loader" />
    </div>
  );
}

Spinner.propTypes = {};

export default memo(Spinner);
