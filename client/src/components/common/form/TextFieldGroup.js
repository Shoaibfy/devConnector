import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({
  name,
  type,
  placeholder,
  error,
  disabled,
  info,
  label,
  onChange,
  value
}) => {
  return (
    <div className='form-group'>
      <input
        type={type}
        className={classnames('form-control form-control-lg', {
          'is-invalid': error
        })}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
        disabled={disabled}
      />

      {info && <small className='form-text text-muted'>{info}</small>}
      {error && <div className='invalid-feedback'> {error} </div>}
    </div>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  error: PropTypes.string,
  disabled: PropTypes.string,
  info: PropTypes.string
};

TextFieldGroup.defaultProps = {
  type: 'text'
};

export default TextFieldGroup;
