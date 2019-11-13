import React, { Component } from 'react';
import ImageUser from './../ImageUser';
import Input from './InputFormEditProfile';
import InputDouble from './InputDoubleFormEditProfile';
import Panel from 'emerald-ui/lib/Panel';
import Button from 'emerald-ui/lib/Button';
import styled from 'styled-components';


const StyleBottom = styled(Button)`
  border: 2px solid;
  width: 100%;
`;


class EditProfileWork extends Component {

    componentDidMount() {
        const { fetchUser } = this.props
        fetchUser()
      }



    render() {

    
    const { data_user } = this.props;
    console.log(data_user.lastName);

    /* console.log('data_user', data_user);
    console.log('status_user', status_user); */
    let propsName = {
        "text":"Nombres",
        "textDescription1":"Nombre",
        "textDescription2":"Apellido",
        "type":"text",
        "nameId1":"first_name",
        "nameId2":"last_name",
        "defaultValue1":data_user.firstName,
        "defaultValue2":data_user.lastName,
        "width1":"col-sm",
        "width2":"col-sm"
    };

    let propsPhone = {
        "text":"Phone",
        "textDescription1":"Código de pais",
        "textDescription2":"ApelNumerolido",
        "type":"text",
        "nameId1":"area_code",
        "nameId2":"phone",
        "defaultValue1":"+ 57",
        "defaultValue2":data_user.phone,
        "width1":"col-3",
        "width2":"col-9"
    };
    //console.log(propsName);
    
    return (
        <div className="container mt-5 mb-5">
          <Panel>
            <Panel.Body>
            
                  
                      <div className="card">
                          <div className="card-header">
                              <h2 className="title">Información de contacto</h2>
                          </div>
                          <div className="card-body">
                              
                                <div className="form-row">
                                    <div className="name">Imagen de perfil</div>
                                    <div className="value">
                                        <div className="row row-space">
                                            <div className="col-sm">
                                                <div className="input-group-desc">
                                                    <ImageUser img_h = "150" img_w = "150" img_url = ""/>
                                                </div>
                                            </div>
                                            <div className="col-sm">
                                                <div className="input-group-desc-file">
                                                    <input className="input--style-6" type="file" name="profile_pic" id = "profile_pic"/>
                                                    <label className="label--desc-file" htmlFor = "profile_pic">Seleccionar una imagen</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <InputDouble data={propsName}/>

                                <Input text={'Correo'} type={'email'} name = {'email'} valueCustom = {data_user.email}/>
                                
                                <InputDouble data={propsPhone}/>

                                <Input text={'Dirección (Opcional)'} type={'text'} name={'address'} valueCustom={data_user.address}/>
                                  {/* <div className="form-row">
                                      <div className="name">Subject</div>
                                      <div className="value">
                                          <div className="input-group">
                                              <div className="rs-select2 js-select-simple select--no-search">
                                                  <select name="subject">
                                                      <option disabled="disabled" defaultValue="selected">Choose option</option>
                                                      <option>Subject 1</option>
                                                      <option>Subject 2</option>
                                                      <option>Subject 3</option>
                                                  </select>
                                                  <div className="select-dropdown"></div>
                                              </div>
                                          </div>
                                      </div>
                                  </div> */}

                                  {/* <div className="form-row p-t-20">
                                      <label className="label label--block">Are you an existing customer?</label>
                                      <div className="p-t-15">
                                          <label className="radio-container m-r-55">Yes
                                              <input type="radio" checked="checked" name="exist"/>
                                              <span className="checkmark"></span>
                                          </label>
                                          <label className="radio-container">No
                                              <input type="radio" name="exist"/>
                                              <span className="checkmark"></span>
                                          </label>
                                      </div>
                                  </div> */}

                                <div className="card-header">
                                    <h2 className="title">información laboral</h2>
                                </div>
                                <div className="card-body">
                                    <Input text={'Sector laboral'} type={'text'} name={'sector'} valueCustom={'312312'}/>
                                </div>

                                  <div>
                                    <div className="row">
                                      <div className="col-6">
                                        <StyleBottom color="primary" size="lg">
                                          Guardar cambios
                                        </StyleBottom>
                                      </div>
                                      <div className="col-6">
                                        <StyleBottom size="lg">
                                          Cancelar
                                        </StyleBottom>
                                      </div>
                                    </div>
                                    
                                  </div>

                          </div>
                      </div>
                  
              

            </Panel.Body>
          </Panel>
        </div>
      );
    }
  }

  export default EditProfileWork;
