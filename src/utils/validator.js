function validate_login(state){
    let ret = false
    const {data_register, password} = state

    //1.  Validate empty values
    if(password !== '' && data_register !== ''){

        //2. Validate the lenth of data
        if(correctLength(password, 6) && correctLength(data_register, 4)){
            ret = true
        }

    }

    return ret
}

function validate_register(state){
    let ret = false
    const {register_name, register_data_register, register_password, register_age, register_type, register_terms} = state

    //1. Validate empty values
    if(register_name !== "" && register_data_register !== "" && register_password !== "" && register_age !== ""){

        //2. Correct Length
        if(correctLength(register_name, 4) && correctLength(register_password, 6) && correctDate(register_age) && correctUserType(register_type) ){

            //3. Now, we check the data for the register
            if(correctEmail(register_data_register) || correctNumberPhone(register_data_register)){
                //3. Finish, accept terms
                if(register_terms === 1){
                    ret = true
                }else{
                    console.log('TERMINOS')
                }
            }//End data of register validation
            else{
                console.log('Data register')
            }


        }//End Correct length validation
        else{
            console.log('Data correct lengtg')
        }
    }//End of empty values validation
    else{
        console.log('Data empty values')
    }

    return ret

}

/**
  * 1. Function for check the size of a text
  */
 function correctLength(text, minLength){
    var ret = false;

    if(text.length >= minLength){
        ret = true;
    }

    return ret;
 }

 /**
 * 2. Function for to see if data is correct email
 */
function correctEmail(posibleEmail){
    let ret = false;
    let expr = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ( !expr.test(posibleEmail) ){
        ret = false;
    }else{
        ret = true;
    }
    return ret;
}


/**
 * 3. Function for to see if data is Correct number phone
 */
function correctNumberPhone(posibleNumber){

    let ret = false;

    let expr=/^([0-9]+){9}$/;//<--- con esto vamos a validar el numero
    let expr2=/\s/;//<--- con esto vamos a validar que no tenga espacios en blanco

    if(!expr2.test(posibleNumber)){
        if(expr.test(posibleNumber)){
            ret = true;
        }
    }


    return ret;
}

/**
 * 4. Function for check if date is Correct
 */
function correctDate(date){
    let ret = false;

    let fechaf = date.split("-");
    // let day = fechaf[2];
    // let month = fechaf[1];
    let year = fechaf[0];
    let year2 = parseInt(year, 10);

    if(year2 < 2000 && year2 > 1900){
        ret = true;
    }

    // console.log("Fecha: " + ret)
    return ret;
}

/**
 * Correct Type user
 */
function correctUserType(userType){
    let ret = false;
    (userType === 1 || userType === 2 || userType === "1" || userType === "2" )?ret = true: ret = false;
    return ret;
}

module.exports = {validate_login, validate_register};
