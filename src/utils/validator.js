function validate_login(state) {
  let ret = false;
  const { data_register, password } = state;

  //1.  Validate empty values
  if (password !== '' && data_register !== '') {
    //2. Validate the lenth of data
    if (correctLength(password, 6) && correctLength(data_register, 4)) {
      ret = true;
    }
  }

  return ret;
}

function validate_register(state) {
  let LIMIT_LENGTH_NAME = 4,
    LIMIT_LENGTH_PASSWORD = 6;

  let resultValidator = {
    correct: false,
    message_es: '',
    message_en: '',
    type: 'error'
  };
  const {
    //register_name,
    register_firstName,
    register_lastName,
    register_data_register,
    register_password,
    register_age,
    register_type,
    register_terms
  } = state;

  //1. Validate empty values
  if (
    register_firstName !== '' &&
    register_lastName !== '' &&
    register_data_register !== '' &&
    register_password !== '' &&
    register_age !== ''
  ) {
    //2. Correct Length
    if (
      correctLength(register_firstName, LIMIT_LENGTH_NAME) &&
      correctLength(register_lastName, LIMIT_LENGTH_NAME) &&
      correctLength(register_password, LIMIT_LENGTH_PASSWORD) &&
      correctDate(register_age) &&
      correctUserType(register_type)
    ) {
      //3. Now, we check the data for the register
      if (
        correctEmail(register_data_register) ||
        correctNumberPhone(register_data_register)
      ) {
        //3. Finish, accept terms
        if (register_terms === 1) {
          resultValidator.type = '';
          resultValidator.correct = true;
        } else {
          resultValidator.message_es =
            'Por favor acepta los terminos y condiciones';
          resultValidator.message_en = 'Please accept terms and conditions';
        }
      } //End data of register validation
      else {
        console.log('Data register incorrect');
        resultValidator.message_es =
          'El correo o numero telefonico es incorrecto';
        resultValidator.message_en = 'The phone number or email is incorrect';
      }
    } //End Correct length validation
    else {
      console.log('Data do not have correct format');
      const iconrrectData = `
      ${
        correctLength(register_firstName, LIMIT_LENGTH_NAME)
          ? ''
          : ' // ' + register_firstName
      }
      ${
        correctLength(register_lastName, LIMIT_LENGTH_NAME)
          ? ''
          : ' // ' + register_lastName
      }
      ${
        correctLength(register_password, LIMIT_LENGTH_PASSWORD)
          ? ''
          : ' // **password**'
      }
      ${correctDate(register_age) ? '' : ' // ' + register_age}
      ${correctUserType(register_type) ? '' : ' // ' + register_type}
      `;
      resultValidator.message_es = `Hay dato(s) incorrectos: (${iconrrectData})`;
      resultValidator.message_en = `You have incorrect data: (${iconrrectData})`;
    }
  } //End of empty values validation
  else {
    console.log('Data empty values');
    resultValidator.message_es = 'Hay dato(s) vacio(s) en el formulario';
    resultValidator.message_en = 'You have some field(s) empty';
  }

  return resultValidator;
}

function validate_editProfileWorker(state) {
  let ret = {
    correct: false,
    message: 'Los datos estan vacios',
    type: 'error'
  };

  const {
    //categorie,
    //profession,
    codeCategorieSelect,
    codeProfessionSelect,
    edit_first_name,
    edit_last_name,
    edit_email,
    edit_phone,
    edit_area_code,
    edit_address,
    edit_disponibily
  } = state;

  //1. Validate empty values
  if (
    codeCategorieSelect !== '' ||
    codeProfessionSelect !== '' ||
    edit_first_name !== '' ||
    edit_last_name !== '' ||
    edit_email !== '' ||
    edit_phone !== '' ||
    edit_area_code !== '' ||
    edit_address !== '' ||
    edit_disponibily !== ''
  ) {
    //2. Correct Length
    if (edit_first_name && !correctLength(edit_first_name, 4)) {
      ret.message = 'El nombre debe contener al menos 4 caracteres';
      ret.type = 'warning';
      return ret;
    }

    if (edit_last_name && !correctLength(edit_last_name, 4)) {
      ret.message = 'El apellido debe contener al menos 4 caracteres';
      ret.type = 'warning';
      return ret;
    }

    if (edit_email && !correctEmail(edit_email)) {
      ret.message = 'El correo electronico no es correcto';
      ret.type = 'warning';
      return ret;
    }

    if (edit_phone && !correctNumberPhone(edit_phone)) {
      ret.message = 'El numero telefonico no es correcto';
      ret.type = 'warning';
      return ret;
    }

    if (edit_area_code && !correctAreaCodePhone(edit_area_code)) {
      ret.message = 'El Codigo de area ingresado no es correcto';
      ret.type = 'warning';
      return ret;
    }

    if (edit_address && !correctLength(edit_address, 6)) {
      ret.message = 'La direccion ingresada es muy corta';
      ret.type = 'warning';
      return ret;
    }

    ret.message = 'Correcto';
    ret.correct = true;
  } else {
    console.log('Else');
  }

  return ret;
}

function validate_editProfileClient(state) {
  let allIsEmpty = true;
  let result = {
    correct: false,
    message: 'Los datos estan vacios',
    type: 'error'
  };

  //1. Check if the data is empty
  Object.keys(state).forEach(prop => {
    if (state[prop] !== '') allIsEmpty = false;
  });
  if (allIsEmpty) return result;

  //2. Check if all data has correct format
  const { firstName, lastName, email, phone, areaCodePhone, address } = state;
  result.type = 'warning';
  if (firstName && !correctLength(firstName, 4)) {
    result.message = 'El nombre debe contener al menos 4 caracteres';
    return result;
  }

  if (lastName && !correctLength(lastName, 4)) {
    result.message = 'El apellido debe contener al menos 4 caracteres';
    return result;
  }

  if (email && !correctEmail(email)) {
    result.message = 'El correo electronico no es correcto';
    return result;
  }

  if (phone && !correctNumberPhone(phone)) {
    result.message = 'El numero telefonico no es correcto';
    return result;
  }

  if (areaCodePhone && !correctAreaCodePhone(areaCodePhone)) {
    result.message = 'El Codigo de area ingresado no es correcto';
    return result;
  }

  if (address && !correctLength(address, 10)) {
    result.message = 'La direccion ingresada es muy corta';
    return result;
  }

  result.message = 'Correcto';
  result.correct = true;
  result.type = 'OK';
  return result;
}

/**
 * 1. Function for check the size of a text
 */
function correctLength(text, minLength) {
  var ret = false;

  if (text.length >= minLength) {
    ret = true;
  }

  return ret;
}

/**
 * 2. Function for to see if data is correct email
 */
function correctEmail(posibleEmail) {
  let ret = false;
  let expr = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!expr.test(posibleEmail)) {
    ret = false;
  } else {
    ret = true;
  }
  return ret;
}

/**
 * 3. Function for to see if data is Correct number phone
 */
function correctNumberPhone(posibleNumber) {
  let ret = false;

  let expr = /^([0-9]+){9}$/; //<--- con esto vamos a validar el numero
  let expr2 = /\s/; //<--- con esto vamos a validar que no tenga espacios en blanco

  if (!expr2.test(posibleNumber)) {
    if (expr.test(posibleNumber)) {
      ret = true;
    }
  }

  return ret;
}

/**
 * 4. Function for check if date is Correct
 */
function correctDate(date) {
  let ret = false;

  let fechaf = date.split('-');
  // let day = fechaf[2];
  // let month = fechaf[1];
  let year = fechaf[0];
  let year2 = parseInt(year, 10);

  if (year2 < 2000 && year2 > 1900) {
    ret = true;
  }
  return ret;
}

/**
 * Correct Type user
 */
function correctUserType(userType) {
  let ret = false;
  userType === 1 || userType === 2 || userType === '1' || userType === '2'
    ? (ret = true)
    : (ret = false);
  return ret;
}

function correctAreaCodePhone(code) {
  return (
    (code.indexOf('+') >= 0 &&
      /^\d{1,3}$/.test(code.substring(1, code.length))) ||
    (/^\d+$/.test(code) && code.length <= 3)
  );
}

module.exports = {
  validate_login,
  validate_register,
  validate_editProfileWorker,
  validate_editProfileClient
};
