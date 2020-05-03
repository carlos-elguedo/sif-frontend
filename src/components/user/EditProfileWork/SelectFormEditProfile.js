import React, { Component } from 'react';
import styled from 'styled-components';
import SearchableSelect from 'emerald-ui/lib/SearchableSelect';

const StyleSelect = styled(SearchableSelect)`
  width: 100%;

  a {
    text-align-last: center;
  }
  div > div.eui-text-field-wrapper{
    text-align-last: center;
  }
`;

class SelectFormEditProfile extends Component {
    render() {

    let id =  this.props.id;
    let currentValue =  this.props.value;
    let text =  this.props.text;
    let options =  this.props.options;
    let status =  this.props.status;
    let code =  this.props.code? this.props.code:"";
    let hasCode = code ? true : false;
    let handleSelect = this.props.changes;


    let optionsSelect = Object.values(options).map((item, index) => {
        
        if(hasCode){
            const isSameCodeProfession = (currentValue) => currentValue === code;
            let itemMatch = item.group.every(isSameCodeProfession);
            if(itemMatch){
                if(currentValue){
                    let itemSelected = item.cod === currentValue;
                    if(itemSelected){
                        return (
                            <option value={item.cod} key={index}>{item.name_es}</option>
                        );
                    }
                }else{
                    return (
                        <option value={item.cod} key={index}>{item.name_es}</option>
                    );
                }
            } 
        }else{
            if(currentValue){
                let itemMatchCategorie = item.cod === currentValue;
                if(itemMatchCategorie){
                    return (
                        <option value={item.cod} key={index}>{item.name_es}</option>
                    );
                }
            }else{
                return (
                    <option value={item.cod} key={index}>{item.name_es}</option>
                );
            }            
        }
    return [];
    });

    return (
        <div className="form-row">
            <div className="name">{text}</div>
            <div className="value selects">
                <div>
                    {
                        status ?(
                            <StyleSelect id={id} shape = "flat" onSelect = {handleSelect} value={currentValue}>
                                {/* <option value='default' key='000'>Selecciona una opción</option> */}
                                {optionsSelect}
                            </StyleSelect>
                        ):
                            <div>No ready</div>
                    }
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default SelectFormEditProfile;
  