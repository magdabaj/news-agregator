/**
 *
 * LoginPage
 *
 */

import { makeSelectUsers, makeSelectNewUser } from 'containers/App/selectors';
import LoginForm from 'components/LoginForm/Loadable';
import { loadUsers, setUser } from 'containers/App/actions';
import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import { loginUser } from './actions';

export const LoginPage = ({ users, ...props }) => {
  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });
  console.log('new user', props.newUser);
  const [_user, _setUser] = useState(props.newUser);

  useEffect(() => {
    if (users.length === 0) {
      props.loadUsers();
    }
  }, []);
  const handleChange = event => {
    const { name, value } = event.target;
    _setUser(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };
  console.log('user', _user);
  const handleSave = event => {
    event.preventDefault();
    props.loginUser(_user);
  };
  console.log('users', users);

  return (
    <div>
      <h2>Login</h2>
      <LoginForm user={_user} onChange={handleChange} onSave={handleSave} />
    </div>
  );
};

LoginPage.propTypes = {
  users: PropTypes.array.isRequired,
  loadUsers: PropTypes.func.isRequired,
  newUser: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  users: makeSelectUsers(),
  newUser: makeSelectNewUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadUsers: () => dispatch(loadUsers()),
    loginUser: user => dispatch(loginUser(user)),
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
