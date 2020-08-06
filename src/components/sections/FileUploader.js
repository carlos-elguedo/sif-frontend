import React, { memo, useState } from 'react';

import FileDropzone from 'emerald-ui/lib/FileDropzone';
import FileUploadList from 'emerald-ui/lib/FileUploadList';
import FileUploadItem from 'emerald-ui/lib/FileUploadItem';
import styled from 'styled-components';
import { utils } from '../../api';
import PropTypes from 'prop-types';
import ImageUser from '../user/ImageUser';
import Spinner from 'emerald-ui/lib/Spinner';
import Button from 'emerald-ui/lib/Button';
import ModalWindow from './ModalWindow';

export const UploadTitle = styled.span`
  color: '#8ea7a7';
  font-size: 16px;
  line-height: 1px;
`;

export const StyledI = styled.i`
  && {
    font-size: 27px;
    color: #bec6c6;
    display: flex;
    justify-content: center;
  }
`;

export const StyledP = styled.p`
  color: #8ea7a7;
  margin: 0;
`;

export const StyledA = styled.a`
  :hover {
    text-decoration: none;
  }
`;

const FileUpload = ({
  invalidFormatMessage,
  url,
  currentImage,
  urlReload,
  acceptedFiles,
  alert
}) => {
  const [showModalViewImage, setShowModalViewImage] = useState(false);
  const [fileUpload, setFileUpload] = useState([]);
  const [isUploading, setUploadingFile] = useState(false);
  const [textUploadingFile, setTextUploadingFile] = useState(
    'Subiendo archivo...'
  );

  const removeFile = () => {
    setFileUpload([]);
  };

  const fileEndsWith = name => {
    let value = false;
    value = acceptedFiles.some(element => {
      return name.endsWith(element);
    });
  };

  const handleDrop = async (acceptedFiles = []) => {
    if (acceptedFiles.length) {
      setUploadingFile(true);

      const file = acceptedFiles.map(f => ({
        ...f,
        name: f.name,
        cancelable: true,
        onCancel: removeFile,
        error: fileEndsWith(f.name),
        message: fileEndsWith(f.name) ? invalidFormatMessage : 'Correct format'
      }));

      setFileUpload(file);
      if (!file.some(f => f.error)) {
        if (file.length) {
          setTimeout(async function () {
            await utils
              .uploadFile(url, acceptedFiles)
              .then(res => {
                const { data } = res;
                console.log('handleDrop -> data', data);
                setTextUploadingFile('La imagen a sido subida correctamente');
                setTimeout(function () {
                  document.location = urlReload;
                }, 1000);
              })
              .catch(() => {})
              .finally(() => {});
          }, 1500);
        }
      }
    } else {
      alert && alert(invalidFormatMessage);
    }
  };

  const ViewImage = () => {
    setShowModalViewImage(true);
  };

  const closeViewImage = () => {
    setShowModalViewImage(false);
  };

  return (
    <>
      <div>
        {fileUpload.length && isUploading ? (
          <div>
            <FileUploadList style={{ marginBottom: 20 }}>
              {fileUpload.map(({ ...rest }, key) => (
                <FileUploadItem key={key} {...rest} />
              ))}
            </FileUploadList>
            <Spinner animation="grow" variant="warning" />
            <p>{textUploadingFile}</p>
          </div>
        ) : (
          <div>
            <ModalWindow
              show={showModalViewImage}
              textHeader={'Tu imagen de perfil'}
              close={closeViewImage}
              children={
                <ImageUser img_h="450" img_w="450" img_url={currentImage} />
              }
            />
            <FileDropzone
              style={{ marginBottom: 20 }}
              multiple={false}
              onDrop={handleDrop}
              accept={acceptedFiles}
            >
              <div className="row row-space">
                <div className="col-sm">
                  <ImageUser img_h="150" img_w="150" img_url={currentImage} />
                </div>
                <div className="col-sm">
                  <label className="label--desc-file" htmlFor="profile_pic">
                    Selecciona o arrastra una imagen
                  </label>
                </div>
              </div>
            </FileDropzone>
            {currentImage && <Button onClick={ViewImage}>Ver imagen</Button>}
          </div>
        )}
        <br />
      </div>
    </>
  );
};

FileUpload.propTypes = {
  invalidFormatMessage: PropTypes.string,
  currentImage: PropTypes.string,
  acceptedFiles: PropTypes.array,
  urlReload: PropTypes.string,
  url: PropTypes.string,
  alert: PropTypes.func
};

export default memo(FileUpload);
