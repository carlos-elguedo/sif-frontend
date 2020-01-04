import React, { Component } from 'react';


class InputFormEditProfile extends Component {
    render() {

    let text =  this.props.text;
    let type =  this.props.type;
    let nameId =  this.props.name;
    let DefaultValue =  this.props.valueCustom;
    let changes =  this.props.changes;

    //console.log('Llego a el componente', this.pro)


    return (
        <div className="form-row">
            <div className="name">{text}</div>
            <div className="value">
                <div className="input-group">
                    <input className="input--style-5" type={type} name={nameId} placeholder={DefaultValue} onChange={changes}/>
                </div>
            </div>
         </div>
      );
    }
  }
  
  export default InputFormEditProfile;
  