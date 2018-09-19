import React, { Component } from 'react';
//import { Link } from "react-router-dom";

var cont = 0;
var textVisible = "", text_img = "";

class ModalMessage extends Component {

    render() {

        if(this.props.visibility === true){
            textVisible = "modal1";
            text_img = "assets/images/message.png";
        }else{            
            textVisible = "modal1 invisible";
            text_img = "assets/images/progress.gif";
            
        }
        console.log(textVisible);
        console.log(text_img);
        return (
            <div className={textVisible}>
                <div className='center1'>
                    <center>
                        <img src={text_img}/>
                    
                        <br/>
                        <label>{this.props.message}</label>
                        <br/>
                        <button id = 'cancelar-envio' className='boton-aceptar-cancelar' onClick={this.props.cancel}>
                            {this.props.boton_text}
                        </button>
                    </center>
                </div>
            </div>
        );
    }
  }
  
  export default ModalMessage;