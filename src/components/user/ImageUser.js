import React, { Component } from 'react';

const config = require('../../config.js')

class ImageUser extends Component {
    render() {

      let classStyle = "", height = "", width = "", image;
      height = this.props.img_h
      width = this.props.img_w
      image = this.props.img_url ? this.props.img_url : 'default.png' 

      if (height !== "" && width !== ""){
        classStyle = `wrap-pic-cir-4 h-${height} w-${width}`
      }

      return (
        <div className="col-lg-12 text-center">
          <img className = {classStyle} src={config.SERVER_URL+`/img/perfil/${image}`} alt="Card"/>
        </div>
      );
    }
  }

  export default ImageUser;
