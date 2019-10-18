/**
 *
 * UsersList
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function UsersList() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

UsersList.propTypes = {};

export default memo(UsersList);
