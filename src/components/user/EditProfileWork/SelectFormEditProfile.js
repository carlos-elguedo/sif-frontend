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

    let text =  this.props.text;
    let options =  this.props.options;
    let status =  this.props.status;
    let code =  this.props.code? this.props.code:"";
    let hasCode = code ? true : false;
    let handleSelect = this.props.changes;

    console.log('Llego a el componente', code)
    console.log('Tiene code', hasCode)


    return (
        <div className="form-row">
            <div className="name">{text}</div>
            <div className="value selects">
                <div>
                    {
                        status ?(
                            <StyleSelect id="s1" shape = "flat" onSelect = {handleSelect}>
                                {
                                    Object.values(options).map((item, index) => {
                                        //if(hasCode)console.log(item.group)
                                        
                                        if(hasCode){
                                            const isSameCodeProfession = (currentValue) => currentValue === code;
                                            let itemMatch = item.group.every(isSameCodeProfession);
                                            //console.log("Entro a la condicion: ", code)
                                            if(itemMatch){
                                                return (
                                                    <option value={item.cod} key={index}>{item.name_es}</option>
                                                ); 
                                            } 
                                        }else{
                                            console.log("No No Entro a la condicion: ", code)
                                            return (
                                                <option value={item.cod} key={index}>{item.name_es}</option>
                                            ); 
                                        }
                                        
                                    })
                                }
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
  