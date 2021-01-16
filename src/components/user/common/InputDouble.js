import React from 'react';
const InputDouble = ({
  text,
  width = { one: 'col-sm', two: 'col-sm' },
  defaultValues,
  onChange,
  nameIds,
  type,
  disabled = false,
  textDescriptions
}) => {
  return (
    <div className="form-row">
      <div className="name">{text}</div>
      <div className="value">
        <div className="row row-space">
          <div className={width.one}>
            <div className="input-group-desc">
              <input
                className="input--style-5"
                type={type}
                placeholder={defaultValues.one || ''}
                onChange={onChange}
                name={nameIds.one}
                disabled={disabled}
              />
              <label className="label--desc">{textDescriptions.one}</label>
            </div>
          </div>
          <div className={width.two}>
            <div className="input-group-desc">
              <input
                className="input--style-5"
                type={type}
                name={nameIds.two}
                placeholder={defaultValues.two}
                onChange={onChange}
                disabled={disabled}
              />
              <label className="label--desc">{textDescriptions.two}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputDouble;
