import React, { Component } from 'react';

class InputFormEditProfile extends Component {
  render() {
    let text = this.props.text;
    let type = this.props.type;
    let nameId = this.props.name;
    let DefaultValue = this.props.valueCustom;
    let changes = this.props.changes;
    let disabled = this.props.disabled;

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
              onChange={changes}
              disabled={disabled}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default InputFormEditProfile;
