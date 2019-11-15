/**
 *
 * LoginPage
 *
 */

import { makeSelectUsers } from 'containers/App/selectors';
import LoginForm from 'components/LoginForm/Loadable';
import { loadUsers } from "containers/App/actions";
import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';

export const LoginPage = ({ users, ...props }) => {
  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (users.length === 0) {
      props.loadUsers();
    }
  }, []);
  const handleChange = event => {
    const { name, value } = event.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };
  console.log('user', user);
  const handleSave = event => {
    event.preventDefault();
  };
  console.log('users', users);

  return (
    <div>
      <h2>Login</h2>
      <LoginForm user={user} onChange={handleChange} onSave={handleSave} />
    </div>
  );
};

LoginPage.propTypes = {
  users: PropTypes.array.isRequired,
  loadUsers: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  users: makeSelectUsers(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadUsers: () => dispatch(loadUsers()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(LoginPage);
