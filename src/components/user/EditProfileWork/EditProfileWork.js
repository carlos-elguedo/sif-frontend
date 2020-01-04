import React, { Component } from 'react';
import ImageUser from './../ImageUser';
import Input from './InputFormEditProfile';
import InputDouble from './InputDoubleFormEditProfile';
import SelectFormEditProfile from './SelectFormEditProfile';
import Panel from 'emerald-ui/lib/Panel';
import Button from 'emerald-ui/lib/Button';
import styled from 'styled-components';
//import SearchableSelect from 'emerald-ui/lib/SearchableSelect';


const StyleBottom = styled(Button)`
  border: 2px solid;
  width: 100%;
`;  

class EditProfileWork extends Component {

    constructor(){
      super();

      this.state={
        categorie:"",
        profession:"",
        codeCategorieSelect: "",
        codeProfessionSelect: "",
        nameId1:"",
        nameId2:""
      };
      
      this.handleCategorieSelect = this.handleCategorieSelect.bind(this);
      this.handleProfessionsSelect = this.handleProfessionsSelect.bind(this);
      this.hadleTyping = this.hadleTyping.bind(this);
      
    }

    componentDidMount() {
        const { fetchUser, fetchProfessions, fetchCategories } = this.props;
        fetchUser();
        fetchProfessions();
        fetchCategories();
      }

      handleCategorieSelect = action => {
        if(typeof(action)==="string"){
          this.setState({
            codeCategorieSelect: action,
            codeProfessionSelect: ""
          });
        }else{
          this.setState({
            codeCategorieSelect: ""
          });
        }
    };

    handleProfessionsSelect = (action) => {
      if(typeof(action)==="string"){
        this.setState({
          codeProfessionSelect: action
        });
      }else{
        console.log(action)
        this.setState({
          codeProfessionSelect: ""
        });
      }
    };

    saveProfileChanges = () => {
      console.log("Quiere enviar cambios")
 
 
    }

    hadleTyping(eve){
        console.log(eve.target.name + ": " +eve.target.value + ": " + eve.target.type);
        const {name, value, type} = eve.target;

        console.log("value",value)
        console.log("name", name)

     /*      //Other fields of input
          this.setState({
            [name]: value
          });
          console.log(this.state) */
    }

    render() {

    
    const { data_user, data_categories, status_categories, status_professions, data_professions } = this.props;
    
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

                                <InputDouble data={propsName} changes={this.hadleTyping}/>

                                <Input text={'Correo'} type={'email'} name = {'email'} valueCustom = {data_user.email}/>
                                
                                <InputDouble data={propsPhone}/>

                                <Input text={'Dirección (Opcional)'} type={'text'} name={'address'} valueCustom={data_user.address}/>
                                
                                {/* <SelectFormEditProfile text = {"Mi trabajo"} options = {data_categories} status = {status_categories} /> */}


                                <div className="card-header">
                                    <h2 className="title">información laboral</h2>
                                </div>
                                <div className="card-body">
                                    
                                    <SelectFormEditProfile
                                      id = {"select-categories"}
                                      value = {this.state.codeCategorieSelect}
                                      text = {"Sector laboral"}
                                      options = {data_categories}
                                      status = {status_categories}
                                      changes={this.handleCategorieSelect}
                                      code={false}/>

                                    <SelectFormEditProfile
                                      id = {"select-peofessions"}
                                      text = {"Professión"}
                                      value = {this.state.codeProfessionSelect}
                                      options = {data_professions}
                                      status = {status_professions}
                                      changes={this.handleProfessionsSelect}
                                      code={this.state.codeCategorieSelect} />
                                </div>

                                  <div>
                                    <div className="row">
                                      <div className="col-6">
                                        <StyleBottom color="primary" size="lg" onClick={this.saveProfileChanges}>
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
