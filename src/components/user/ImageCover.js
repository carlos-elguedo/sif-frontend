import React from 'react';

const config = require('../../config.js');

const ImageCover = ({ img_url }) => {
  let image = '';
  image = img_url ? img_url : 'default.jpg';

  return (
    <img
      src={config.SERVER_URL + `/img/banners/professions/v1/${image}`}
      alt="Cover"
      width="100%"
      max-width="100%"
      z-index="1"
    />
  );
};

export default ImageCover;
