/**
 *
 * LoginForm
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import TextInput from 'components/TextInput/Loadable';

const LoginForm = ({ user, onChange, onSave }) => {
  return (
    <form onSubmit={onSave}>
      <TextInput
        label="Email/Login"
        name="email"
        value={user.email}
        onChange={onChange}
      />
      <TextInput
        label="Password"
        name="password"
        value={user.password}
        onChange={onChange}
      />
      <button onSubmit={onSave} type="submit">
        Login
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  user: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default memo(LoginForm);
