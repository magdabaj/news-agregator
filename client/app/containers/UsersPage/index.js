/**
 *
 * UsersPage
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Spinner from '../../components/Spinner/Loadable';
import makeSelectUsersPage from './selectors';
import { makeSelectUsers, makeSelectLoading } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadUsers } from './actions';
import SearchUserPage from './SearchUserPage';
import Container from './Container';

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
    <Container>
      <Helmet>
        <title>UsersPage</title>
        <meta name="description" content="Description of UsersPage" />
      </Helmet>
      {!loadingUsers ? (
        <>
          <h3>Search for user to see his/her articles</h3>
          <SearchUserPage users={users} />
        </>
      ) : <Spinner/>}
    </Container>
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
    },
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
