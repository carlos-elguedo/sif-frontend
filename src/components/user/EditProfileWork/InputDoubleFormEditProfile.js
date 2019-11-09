import React, { Component } from 'react';


class InputFormEditProfile extends Component {
    render() {

    let text =  this.props.data.text;
    let textDescription1 =  this.props.data.description1;
    let textDescription2 =  this.props.data.description2;
    let type =  this.props.data.type;
    let nameId1 =  this.props.data.name;
    let nameId2 =  this.props.data.name;
    let defaultValue1 =  this.props.data.valueCustom1;
    let defaultValue2 =  this.props.data.alueCustom2;
    let width1 = this.props.data.width1;
    let width2 = this.props.data.width2;


    console.log('Llego a el componente', this.props.data)


    return (
        <div className="form-row">
            <div className="name">{text}</div>
            <div className="value">
                <div className="row row-space">
                    <div className={width1}>
                        <div className="input-group-desc">
                            <input className="input--style-5" type={type} name={nameId1} placeholder={defaultValue1}/>
                            <label className="label--desc">{textDescription1}</label>
                        </div>
                    </div>
                    <div className={width2}>
                        <div className="input-group-desc">
                            <input className="input--style-5" type={type} name={nameId2} placeholder={defaultValue2}/>
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
  