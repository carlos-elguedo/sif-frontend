import React, { Component } from 'react';

const config = require('../../config.js');

const ImageUser = ({ img_url, img_h, img_w }) => {
  let height = '',
    width = '',
    image;
  height = img_h;
  width = img_w;
  image = img_url ? img_url : 'default.png';

  return (
    <div className="col-lg-12 text-center">
      <img
        className={'wrap-pic-cir-4'}
        style={{maxHeight: `${img_h}px`, maxWidth: `${img_w}px`}}
        src={config.SERVER_URL + `/img/perfil/${image}`}
        alt="Card"
      />
    </div>
  );
};

export default ImageUser;
