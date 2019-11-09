import React, { Component } from 'react';
import ImageUser from './../ImageUser';
import Panel from 'emerald-ui/lib/Panel';
import Button from 'emerald-ui/lib/Button';
import styled from 'styled-components';


const StyleBottom = styled(Button)`
  border: 2px solid;
  width: 100%;
`;


class EditProfileWork extends Component {
    render() {
      return (
        <div className="container mt-5 mb-5">
          <Panel>
            <Panel.Body>
            
                  
                      <div className="card">
                          <div className="card-header">
                              <h2 className="title">Edita tu información laboral</h2>
                          </div>
                          <div className="card-body">
                              
                                    <div className="form-row">
                                      <div className="name">Imagen de perfil</div>
                                      <div className="value">
                                          <div className="row row-space">
                                              <div className="col-sm">
                                                  <div className="input-group-desc">
                                                    <ImageUser img_h = "150" img_w = "150" img_url = "car@hotm.com2.jpeg"/>
                                                  </div>
                                              </div>
                                              <div className="col-sm">
                                                  <div className="input-group-desc-file">
                                                      <input className="input--style-6" type="file" name="profile_pic" id = "profile_pic"/>
                                                      <label className="label--desc-file" for = "profile_pic">Seleccionar una imagen</label>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="form-row">
                                      <div className="name">Nombres</div>
                                      <div className="value">
                                          <div className="row row-space">
                                              <div className="col-sm">
                                                  <div className="input-group-desc">
                                                      <input className="input--style-5" type="text" name="first_name"/>
                                                      <label className="label--desc">Nombre</label>
                                                  </div>
                                              </div>
                                              <div className="col-sm">
                                                  <div className="input-group-desc">
                                                      <input className="input--style-5" type="text" name="last_name"/>
                                                      <label className="label--desc">Apellido</label>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="form-row">
                                      <div className="name">Correo</div>
                                      <div className="value">
                                          <div className="input-group">
                                              <input className="input--style-5" type="email" name="email"/>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="form-row">
                                      <div className="name">Phone</div>
                                      <div className="value">
                                          <div className="row row-refine">
                                              <div className="col-3">
                                                  <div className="input-group-desc">
                                                      <input className="input--style-5" type="text" name="area_code"/>
                                                      <label className="label--desc">Código de pais</label>
                                                  </div>
                                              </div>
                                              <div className="col-9">
                                                  <div className="input-group-desc">
                                                      <input className="input--style-5" type="text" name="phone"/>
                                                      <label className="label--desc">Numero</label>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="form-row">
                                      <div className="name">Dirección (Opcional)</div>
                                      <div className="value">
                                          <div className="input-group">
                                              <input className="input--style-5" type="text" name="company"/>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="form-row">
                                      <div className="name">Subject</div>
                                      <div className="value">
                                          <div className="input-group">
                                              <div className="rs-select2 js-select-simple select--no-search">
                                                  <select name="subject">
                                                      <option disabled="disabled" selected="selected">Choose option</option>
                                                      <option>Subject 1</option>
                                                      <option>Subject 2</option>
                                                      <option>Subject 3</option>
                                                  </select>
                                                  <div className="select-dropdown"></div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="form-row p-t-20">
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
