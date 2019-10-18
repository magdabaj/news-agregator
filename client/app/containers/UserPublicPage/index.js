/**
 *
 * UserPublicPage
 *
 */

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectUserPublicPage from './selectors';
import {
  makeSelectLoading,
  makeSelectArticles,
  makeSelectUsers,
  findUserBySlugSelector,
  findUserSelector,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loadUsers, loadUserArticles, findUser } from './actions';

export const UserPublicPage = ({ users, slug, user, ...props }) => {
  useInjectReducer({ key: 'userPublicPage', reducer });
  useInjectSaga({ key: 'userPublicPage', saga });

  useEffect(() => {
    if(users.length === 0) {
      props.loadUsers();
    }

    if(users.length > 0 && slug) {
      props.findUser(users, slug);
    }

    if(user.email !== ''){
      props.loadUserArticles(user.user_id);
    }
  }, [users]);

  console.log('users', users);
  console.log('user', user, 'slug', slug);
  console.log('props', props);

  return (
    <div>
      <Helmet>
        <title>UserPublicPage</title>
        <meta name="description" content="Description of UserPublicPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

UserPublicPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  slug: PropTypes.string,
  loadUsers: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isRegistering: makeSelectUserPublicPage(),
  users: makeSelectUsers(),
  loading: makeSelectLoading(),
  slug: findUserBySlugSelector(),
  articles: makeSelectArticles(),
  user: findUserSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadUsers: () => dispatch(loadUsers()),
    loadUserArticles: user_id => dispatch(loadUserArticles(user_id)),
    findUser: (users, slug) => dispatch(findUser(users, slug)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(UserPublicPage);