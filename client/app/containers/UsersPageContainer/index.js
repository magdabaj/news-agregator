import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import { loadUsers, deleteUser } from './actions';
import injectSaga from 'utils/injectSaga';
import { DAEMON } from 'utils/constants';
import saga from './saga';

const UsersPage = ({ users, ...props }) => {
  useEffect(() => {
    if (users.length === 0) {
      props.loadUsers();
    }
  }, []);
  console.log('users', users);
  return(
    <div>
      Users Page
    </div>
  )
};

export function mapDispatchToProps(dispatch) {
  return {
    loadUsers: () => {
      dispatch(loadUsers());
    },
    deleteUser: user => {
      dispatch(deleteUser(user));
    },
  };
}

const mapStateToProps = state => {
  return {
    users: state.users,
    isSaving: state.isSaving,
    usersError: state.usersError,
    deletingUser: state.deletingUser,
  };
};

const withConnect = connect( mapStateToProps, mapDispatchToProps );

const withReducer = injectReducer({ key: 'UsersPage', reducer });

const withSaga = injectSaga({ key: 'UsersPage', saga, mode: DAEMON });

export default compose(
  // Put `withReducer` before `withConnect`
  withSaga,
  withReducer,
  withConnect,
)(UsersPage);
