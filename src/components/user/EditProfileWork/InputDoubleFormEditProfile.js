import React, { Component } from 'react';

class InputFormEditProfile extends Component {
  render() {
    let text = this.props.data.text;
    let textDescription1 = this.props.data.description1;
    let textDescription2 = this.props.data.description2;
    let type = this.props.data.type;
    let nameId1 = this.props.data.nameId1;
    let nameId2 = this.props.data.nameId2;
    let defaultValue1 = this.props.data.defaultValue1;
    let defaultValue2 = this.props.data.defaultValue2;
    let width1 = this.props.data.width1;
    let width2 = this.props.data.width2;
    let changes = this.props.changes;
    let disabled = this.props.disabled;

    return (
      <div className="form-row">
        <div className="name">{text}</div>
        <div className="value">
          <div className="row row-space">
            <div className={width1}>
              <div className="input-group-desc">
                <input
                  className="input--style-5"
                  type={type}
                  placeholder={defaultValue1}
                  onChange={changes}
                  name={nameId1}
                  disabled={disabled}
                />
                <label className="label--desc">{textDescription1}</label>
              </div>
            </div>
            <div className={width2}>
              <div className="input-group-desc">
                <input
                  className="input--style-5"
                  type={type}
                  name={nameId2}
                  placeholder={defaultValue2}
                  onChange={changes}
                  disabled={disabled}
                />
                <label className="label--desc">{textDescription2}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InputFormEditProfile;
