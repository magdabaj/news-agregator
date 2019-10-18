/**
 *
 * UsersPage
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Spinner from '../../components/Spinner/Loadable';
import makeSelectUsersPage from './selectors';
import { makeSelectUsers, makeSelectLoading } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loadUsers } from './actions';

export const UsersPage = ({users, loadingUsers, ...props}) => {
  useInjectReducer({ key: 'usersPage', reducer });
  useInjectSaga({ key: 'usersPage', saga });

  useEffect(() => {
    if(users.length === 0){
      props.loadUsers();
    }
  },[]);
  console.log('users', users);

  return (
    <div>
      <Helmet>
        <title>UsersPage</title>
        <meta name="description" content="Description of UsersPage" />
      </Helmet>
      {!loadingUsers ? (
        <>
          <FormattedMessage {...messages.header} />
          {users.map(user => (
            <>
              <div>{user.name} {user.surname}</div>
              <div>{user.email}</div>
            </>
          ))}
        </>
      ) : <Spinner/>
      }
    </div>
  );
};

UsersPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  usersPage: makeSelectUsersPage(),
  users: makeSelectUsers(),
  loadingUsers: makeSelectLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadUsers: () => {
      dispatch(loadUsers());
    }
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(UsersPage);
