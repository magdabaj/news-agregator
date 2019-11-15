/**
 *
 * TextInput
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

const TextInput = ({
  name,
  label,
  value,
  onChange,
  error,
  placeholder,
}) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    // wrapperClass += ' ' + 'has-error';
    wrapperClass = 'form-group has-error';
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div>
        <input
          type="text"
          className="form-control"
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default memo(TextInput);
