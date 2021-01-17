import React, { Fragment, useEffect, useState } from 'react';
import { client } from '../../../api';
import Toast from 'emerald-ui/lib/Toast';
import Panel from 'emerald-ui/lib/Panel';
import { CLIENT_ROUTES, messagesApp, ALERT_TYPES } from '../../../constants';
import Alert from '../../info/Alert';
import { Spinner } from 'react-bootstrap';
import FileUpload from '../../sections/FileUploader';
import { Input, InputDouble, ActionButton } from '../common';
import { SERVER_API_UPLOAD } from '../../../config';
import { validate_editProfileClient } from '../../../utils/validator';

const EditProfileClient = () => {
  const [clientInfo, setClientInfo] = useState({});
  const [clientEditData, setClientEditData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    areaCodePhone: '',
    address: ''
  });
  const [state, setState] = useState({
    loadingProfile: true,
    errorGetProfile: false,
    messageError: ''
  });
  const [alert, setAlert] = useState({
    alertShow: false,
    alertText: '',
    alertType: ''
  });

  useEffect(() => {
    client
      .getClient()
      .then(({ data }) => {
        setClientInfo(data);
        setState({
          loadingProfile: false,
          errorGetProfile: false,
          messageError: ''
        });
      })
      .catch(e => {
        setState({
          loadingProfile: false,
          errorGetProfile: true,
          messageError: e.message
        });
      });
  }, []);

  const clearErrorLoading = () =>
    setState({
      loadingProfile: false,
      errorGetProfile: false,
      messageError: ''
    });

  const closeAlert = () => {
    setAlert({
      alertShow: false,
      alertText: '',
      alertType: ''
    });
  };

  const openAlert = (text, type = '') => {
    setAlert({
      alertType: type === 'error' ? ALERT_TYPES.danger : ALERT_TYPES.warning,
      alertText: text,
      alertShow: true
    });
  };

  const hadleTyping = eve => {
    const { name, value } = eve.target;
    let copyInfo = clientEditData;

    Object.keys(clientEditData).forEach(prop => {
      if (prop === name) copyInfo[name] = value;
    });

    setClientEditData(copyInfo);
  };

  const saveChanges = () => {
    const statusEdition = validate_editProfileClient(clientEditData);
    if (statusEdition.correct) {
      client
        .saveProfileChanges(clientEditData)
        .then(({ data }) => {
          if (data) goTo(CLIENT_ROUTES.edit);
        })
        .catch(e => {
          openAlert(e.message, 'warning');
        });
    } else {
      setAlert({
        alertType:
          statusEdition.type === 'error'
            ? ALERT_TYPES.danger
            : ALERT_TYPES.warning,
        alertText: statusEdition.message,
        alertShow: true
      });
    }
  };

  const goTo = url => {
    document.location = url;
  };

  const { loadingProfile, errorGetProfile, messageError } = state;
  const { alertShow, alertText, alertType } = alert;

  return (
    <Fragment>
      <div className="container">
        <Panel>
          <Panel.Body>
            <Alert
              type={alertType}
              text_alert={alertText}
              show={alertShow}
              close={closeAlert}
            />
            {loadingProfile ? (
              <div className="card-header text-center">
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
                  <div className="form-row">
                    <div className="name">Imagen de perfil</div>
                    <div className="value">
                      <FileUpload
                        url={`${SERVER_API_UPLOAD}profile`}
                        currentImage={clientInfo.profileImage || ''}
                        invalidFormatMessage={
                          'Solo imagenes pueden ser cargadas'
                        }
                        urlReload={CLIENT_ROUTES.edit}
                        acceptedFiles={['.png', '.jpg', '.jpeg', '.svg']}
                        alert={openAlert}
                      />
                    </div>
                  </div>
                  <InputDouble
                    text={'Nombres'}
                    defaultValues={{
                      one: clientInfo.firstName || '',
                      two: clientInfo.lastName || ''
                    }}
                    nameIds={{
                      one: 'firstName',
                      two: 'lastName'
                    }}
                    onChange={hadleTyping}
                    type={'text'}
                    textDescriptions={{ one: 'Nombre', two: 'Apellido' }}
                  />
                  <Input
                    text={'Correo Electrónico'}
                    DefaultValue={clientInfo.email || ''}
                    nameId={'email'}
                    onChange={hadleTyping}
                    type={'email'}
                    disabled={clientInfo.email === clientInfo.data_register}
                  />

                  <InputDouble
                    text={'Número telefónico'}
                    defaultValues={{
                      one: '+57',
                      two: clientInfo.phone || ''
                    }}
                    nameIds={{
                      one: 'areaCodePhone',
                      two: 'phone'
                    }}
                    onChange={hadleTyping}
                    type={'text'}
                    textDescriptions={{ one: 'Indicativo Pais', two: 'Número' }}
                  />

                  <Input
                    text={'Dirección'}
                    DefaultValue={clientInfo.address || ''}
                    nameId={'address'}
                    onChange={hadleTyping}
                    type={'text'}
                  />

                  <ActionButton
                    primaryAction={saveChanges}
                    secundaryAction={() => {
                      goTo(CLIENT_ROUTES.root);
                    }}
                  />
                  {/* end of card body and contaiter */}
                </div>
              </div>
            )}
          </Panel.Body>
        </Panel>
      </div>
      <Toast
        message={messageError || messagesApp.notLoaded}
        actionText="Close"
        position="left"
        visible={errorGetProfile}
        duration={3000}
        onActionClick={clearErrorLoading}
      />
    </Fragment>
  );
};

export default EditProfileClient;
