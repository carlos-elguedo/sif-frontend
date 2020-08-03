import React, { Component } from 'react';
import Input from './InputFormEditProfile';
import InputDouble from './InputDoubleFormEditProfile';
import SelectFormEditProfile from './SelectFormEditProfile';
import ModalWindow from '../../sections/ModalWindow';
import DefaultFileUpload from '../../sections/FileUpload';
import FileUpload from '../../sections/FileUploader';
import Panel from 'emerald-ui/lib/Panel';
import Button from 'emerald-ui/lib/Button';
import Spinner from 'emerald-ui/lib/Spinner';
import styled from 'styled-components';
import { worker } from '../../../api';
import { validate_editProfileWorker } from '../../../utils/validator';
import Alert from '../../info/Alert';
import {
  ALERT_TYPES,
  WORKER_ROUTES,
  REQUEST_STATUSES
} from '../../../constants';
import { SERVER_API_UPLOAD, SERVER_URL } from '../../../config';

import { split, isEmpty } from 'lodash';

const StyleBottom = styled(Button)`
  border: 2px solid;
  width: 100%;
`;

class EditProfileWork extends Component {
  constructor() {
    super();

    this.state = {
      //Data
      categorie: '',
      profession: '',
      codeCategorieSelect: '',
      codeProfessionSelect: '',
      edit_first_name: '',
      edit_last_name: '',
      edit_email: '',
      edit_phone: '',
      edit_area_code: '',
      edit_address: '',
      works: [],

      //Alert
      alert_type: '',
      text_alert_edit: '',
      show_alert_edit: false,

      //Modal
      showModalUpdate: false,
      textHeader: '',
      textBody: '',
      iconUpdate: '',
      canReload: true
    };

    this.handleCategorieSelect = this.handleCategorieSelect.bind(this);
    this.handleProfessionsSelect = this.handleProfessionsSelect.bind(this);
    this.hadleTyping = this.hadleTyping.bind(this);
    this.saveProfileChanges = this.saveProfileChanges.bind(this);
    this.close_alert = this.close_alert.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.cancelEdition = this.cancelEdition.bind(this);
  }

  componentDidMount() {
    const { fetchUser, fetchProfessions, fetchCategories } = this.props;
    fetchUser();
    fetchProfessions();
    fetchCategories();
  }

  handleCategorieSelect = action => {
    if (typeof action === 'string') {
      this.setState({
        codeCategorieSelect: action
      });
      const { data_professions } = this.props;
      let codes = [];
      for (let prof in data_professions) {
        let itemMatch = data_professions[prof].group;
        itemMatch.forEach(element => {
          if (element === action) {
            codes.push(data_professions[prof].cod);
          }
        });
      }
      if (codes) {
        this.setState({
          codeProfessionSelect: codes[0]
        });
      }
    } else {
      this.setState({
        codeCategorieSelect: ''
      });
    }
  };

  handleProfessionsSelect = action => {
    if (typeof action === 'string') {
      this.setState({
        codeProfessionSelect: action
      });
    }
  };

  async saveProfileChanges() {
    let resultVerified = validate_editProfileWorker(this.state);

    if (resultVerified.correct) {
      //Send the data to server
      await worker
        .saveProfileChanges(this.state)
        .then(res => {
          const { data } = res;
          this.setState({
            showModalUpdate: true,
            textBody: data.message,
            textHeader: data.option,
            iconUpdate: data.hasError ? 'error' : 'success',
            canReload: data.hasError ? false : true
          });
        })
        .catch(() => {})
        .finally(() => {});
    } else {
      this.setState({
        alert_type:
          resultVerified.type === 'error'
            ? ALERT_TYPES.danger
            : ALERT_TYPES.warning,
        text_alert_edit: resultVerified.message,
        show_alert_edit: true
      });
    }
  }

  hadleTyping(eve) {
    //console.log(eve.target.name + ": " +eve.target.value + ": " + eve.target.type);
    const { name, value } = eve.target;

    this.setState({
      [name]: value
    });
  }

  close_alert(eve) {
    eve.preventDefault();
    this.setState({
      alert_type: '',
      text_alert_edit: '',
      show_alert_edit: false
    });
  }

  closeModal() {
    this.setState({ showModalUpdate: false });
    if (this.state.canReload) {
      document.location = WORKER_ROUTES.edit;
    }
  }

  cancelEdition() {
    document.location = WORKER_ROUTES.root;
  }

  render() {
    const {
      data_user,
      status_user,
      data_categories,
      status_categories,
      status_professions,
      data_professions
    } = this.props;
    const { LOADING, NOT_LOADED } = REQUEST_STATUSES;
    const showSpinner = status_user === LOADING || status_user === NOT_LOADED;

    let name = split(data_user.name, ' ');
    let firstName = data_user.firstName ? data_user.firstName : name[0];
    let lastName = data_user.lastName
      ? data_user.lastName
      : `${name[1]} ${name[2] ? name[2] : ''}`;

    let categorie =
      !isEmpty(data_user.works) && !this.state.profession
        ? data_user.works[0].group
        : '';
    let work =
      !isEmpty(data_user.works) && !this.state.categorie
        ? data_user.works[0].code
        : '';

    const { profileImage } = data_user;

    let propsName = {
      text: 'Nombres',
      textDescription1: 'Nombre',
      textDescription2: 'Apellido',
      type: 'text',
      nameId1: 'edit_first_name',
      nameId2: 'edit_last_name',
      defaultValue1: firstName,
      defaultValue2: lastName,
      width1: 'col-sm',
      width2: 'col-sm'
    };

    let propsPhone = {
      text: 'Phone',
      textDescription1: 'Código de pais',
      textDescription2: 'ApelNumerolido',
      type: 'text',
      nameId1: 'edit_area_code',
      nameId2: 'edit_phone',
      defaultValue1: '+ 57',
      defaultValue2: data_user.phone,
      width1: 'col-3',
      width2: 'col-9'
    };

    return (
      <div className="container mt-5 mb-5">
        <ModalWindow
          show={this.state.showModalUpdate}
          textHeader={this.state.textHeader}
          textBody={this.state.textBody}
          icon={this.state.iconUpdate}
          close={this.closeModal}
        />
        <Panel>
          <Panel.Body>
            <Alert
              type={this.state.alert_type}
              text_alert={this.state.text_alert_edit}
              show={this.state.show_alert_edit}
              close={this.close_alert}
            />

            {showSpinner ? (
              <div className="card-header">
                <div className="card-body">
                  <Spinner animation="grow" variant="warning" />
                </div>
              </div>
            ) : (
              <div className="card">
                <div className="card-header">
                  <h2 className="title">Información de contacto</h2>
                </div>
                <div className="card-body">
                  {/* <div className="form-row">
                    <div className="name">Imagen de perfil</div>
                    <div className="value">
                    <DefaultFileUpload url={`${SERVER_URL}${SERVER_API_UPLOAD}profile`}></DefaultFileUpload>
                    </div>
                  </div> */}

                  <div className="form-row">
                    <div className="name">Imagen de perfil</div>
                    <div className="value">
                      <FileUpload
                        url={`${SERVER_API_UPLOAD}profile`}
                        currentImage={profileImage}
                        invalidFormatMessage={'Solo imagenes pueden ser cargadas'}
                        urlReload={WORKER_ROUTES.edit}
                      ></FileUpload>
                    </div>
                  </div>

                  <InputDouble
                    data={propsName}
                    changes={this.hadleTyping}
                    disabled={false}
                  />

                  <Input
                    text={'Correo'}
                    type={'email'}
                    name={'edit_email'}
                    valueCustom={data_user.email}
                    changes={this.hadleTyping}
                    disabled={data_user.data_register === data_user.email}
                  />

                  <InputDouble
                    data={propsPhone}
                    changes={this.hadleTyping}
                    disabled={data_user.data_register === data_user.phone}
                  />

                  <Input
                    text={'Dirección (Opcional)'}
                    type={'text'}
                    name={'edit_address'}
                    valueCustom={data_user.address}
                    changes={this.hadleTyping}
                    disabled={false}
                  />

                  {/* <SelectFormEditProfile text = {"Mi trabajo"} options = {data_categories} status = {status_categories} /> */}

                  <div className="card-header">
                    <h2 className="title">información laboral</h2>
                  </div>
                  <div className="card-body">
                    <SelectFormEditProfile
                      id={'select-categories'}
                      currentValue={
                        this.state.codeCategorieSelect
                          ? this.state.codeCategorieSelect
                          : categorie
                      }
                      text={'Sector laboral'}
                      options={data_categories}
                      status={status_categories}
                      handleSelect={this.handleCategorieSelect}
                    />

                    <SelectFormEditProfile
                      id={'select-peofessions'}
                      text={'Professión'}
                      currentValue={
                        this.state.codeProfessionSelect
                          ? this.state.codeProfessionSelect
                          : work
                      }
                      options={data_professions}
                      status={status_professions}
                      handleSelect={this.handleProfessionsSelect}
                      code={
                        this.state.codeCategorieSelect
                          ? this.state.codeCategorieSelect
                          : categorie
                      }
                    />
                  </div>

                  <div>
                    <div className="row">
                      <div className="col-6">
                        <StyleBottom
                          color="primary"
                          size="lg"
                          onClick={this.saveProfileChanges}
                        >
                          Guardar cambios
                        </StyleBottom>
                      </div>
                      <div className="col-6">
                        <StyleBottom size="lg" onClick={this.cancelEdition}>
                          Cancelar
                        </StyleBottom>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}

export default EditProfileWork;
