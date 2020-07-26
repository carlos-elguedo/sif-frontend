import React, { memo, useState } from 'react';
import FileUpload from 'emerald-ui/lib/FileUpload';
import ImageUser from '../user/ImageUser';

const DefaultFileUpload = (url, { children, rest }) => {
  const [FILES, setFile] = useState([]);
  const [UPLOAD_IS_DISABLE, setUploadDisable] = useState(false);

  // You can use here an arrow function instead to avoind using binding in the constructor:
  // handleUploadStart = files => {}
  const handleUploadStart = files => {
    setUploadDisable(true);
    const messages = {
      size: 'File is too large. Please choose another file',
      format: 'File type not supported. We only support PNGs',
      single: 'Only one file upload is supported'
    };

    const filesWithRejectedMessages = files.map(file => {
      if (file.rejected) {
        file.message = messages[file.rejected];
      }

      return file;
    });

    const newFiles = [...FILES, ...filesWithRejectedMessages];
    setFile(newFiles);
  };

  // You can use here an arrow function instead to avoind using binding in the constructor:
  // handleUploadSuccess = (result, id) => {}
  const handleUploadSuccess = (result, id, file) => {
    console.log("handleUploadSuccess -> result", result)
    console.log('This is the actual File object', file);

    const newFiles = FILES.map(prevFile => {
      if (prevFile.id === id) {
        prevFile.message = 'Done';
      }

      return prevFile;
    });
    setFile(newFiles);
  };

  // You can use here an arrow function instead to avoind using binding in the constructor:
  // handleUploadError = (error, id) => {}
  const handleUploadError = (error, id, file) => {
    console.log('----------------------------------------');
    console.log("handleUploadError -> error", error)
    console.log('This is the actual File object', file);

    const newFiles = FILES.map(prevFile => {
      if (prevFile.id === id) {
        prevFile.error = true;
        prevFile.message = 'This is a custom error message';
      }

      return prevFile;
    });

    setFile(newFiles);
  };

  // You can use here an arrow function instead to avoind using binding in the constructor:
  // handleProgress = file => {}
  const handleProgress = file => {
    const newFiles = FILES.map(prevFile => {
      if (prevFile.id === file.id) {
        prevFile.progress = file.progress;
        prevFile.speed = file.speed;
      }

      return prevFile;
    });

    setFile(newFiles);
  };

  // You can use here an arrow function instead to avoind using binding in the constructor:
  // handleCancel = (fileName, id, aborted) => {}
  const handleCancel = (fileName, id, aborted) => {
    console.log('Dio cancelar')
    if (!aborted) {
      // File finished uploading
      // Here goes the code to remove the file from the server
      console.log('This will be removed from the server');
    }

    // Removes the aborted file from the state
    const newFiles = [];

    FILES.forEach(prevFile => {
      if (prevFile.id !== id) {
        newFiles.push(prevFile);
      }
    });
    setFile(newFiles);
  };

  //delete rest.files;

  return (
    <FileUpload
      {...rest}
      files={FILES}
      onCancel={handleCancel}
      onProgress={handleProgress}
      onUploadError={handleUploadError}
      onUploadStart={handleUploadStart}
      onUploadSuccess={handleUploadSuccess}
      accept={'.png, .jpg, .jpeg'}
      disableClick={UPLOAD_IS_DISABLE}
      multiple={false}
      url={url.url}
    >
      <div className="row row-space">
        <div className="col-sm">
          <ImageUser img_h="150" img_w="150" img_url="" />
        </div>
        <div className="col-sm">
          {/* <input
            className="input--style-6"
            type="file"
            name="profile_pic"
            id="profile_pic"
          /> */}
          <label className="label--desc-file" htmlFor="profile_pic">
            Selecciona o arrastra una imagen
          </label>
        </div>
      </div>
    </FileUpload>
  );
};

export default memo(DefaultFileUpload);
