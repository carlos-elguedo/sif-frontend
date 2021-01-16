import React from 'react';
const Input = ({
  text,
  DefaultValue,
  type,
  nameId,
  disabled = false,
  onChange
}) => {
  return (
    <div className="form-row">
      <div className="name">{text}</div>
      <div className="value">
        <div className="input-group">
          <input
            className="input--style-5"
            type={type}
            name={nameId}
            placeholder={DefaultValue}
            onChange={onChange}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
