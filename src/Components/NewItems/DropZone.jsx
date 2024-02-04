import React, { useEffect, useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone';
import "./DropZone.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const DropZone = ({tit,multiple}) => {
  const [file, setFile] = useState(null); // For single file
  const [files, setFiles] = useState([]); // For multiple files
  const [rejected, setRejected] = useState([])
  const accept = {
    "image/*": [],
  }
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (!multiple) {
      if (acceptedFiles.length > 0) {
        const acceptedFile = acceptedFiles[0];
        setFile(Object.assign(acceptedFile, { preview: URL.createObjectURL(acceptedFile) }));
      }
    } else {
      acceptedFiles.forEach(file => {
        const isDuplicate = files.some(existingFile => existingFile.name === file.name);
        if (!isDuplicate) {
          if (acceptedFiles?.length) { // Optional chaining here
            setFiles(previousFiles => [
              ...previousFiles,
              Object.assign(file, { preview: URL.createObjectURL(file) })
            ]);
          }
        } else {
          console.log(`File "${file.name}" already exists. Rejecting duplicate file.`);
        }
      });
    }
  
    if (rejectedFiles.length > 0) {
      setRejected(previousFiles => [...previousFiles, ...rejectedFiles]);
    }
  }, [multiple, files]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept,multiple:multiple})
  const removeFile = name => {
    setFiles(files => files.filter(file => file.name !== name))
  }
  const removeRejected = name => {
    setRejected(files => files.filter(({ file }) => file.name !== name))
  }
  useEffect(() => {
    // Revoke the data uris to avoid memory leaks
    return () => files.forEach(file => URL.revokeObjectURL(file.preview))
  }, [files])
  return (
    <section className='DropZone'>
      <div  {...getRootProps()}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p className='drop'>Drop the files here ...</p> :
            <div className='drop'>
            <FontAwesomeIcon icon="fa-solid fa-upload" style={{color:"#777",fontSize:"25px"}} />
              <p className='mt-2'>{tit} </p></div>

        }

      </div>
      {!multiple && file && (
        <div className='BasicImage'>
          <img src={file.preview} alt='' />
          <button
            type="button"
            onClick={() => setFile(null)}
            className="delete-button mt-1"
          >
            Remove
          </button>
        </div>
      )}

      {multiple && files.length > 0 && (
        <ul>
          {files.map(file =>
            <li key={file.name}>
              <div>
                <img src={file.preview} alt='' />
              </div>
              <button
                type="button"
                onClick={() => removeFile(file.name)}
                className="delete-button mt-1"
              >
                Remove
              </button>
            </li>
          )}
        </ul>
      )}
      {rejected.length > 0 ? (
        <div className='border-top rejected '>
          <h5 className='mt-3 tit text-danger'> Rejected Files </h5>
          <div className='mt-1'>
            {rejected.map(({ file, errors }) => (
              <div className='rejectedFiles'>
                <li key={file.name}>  {file.name}
                  <div className='text-[12px] text-red-400'>
                    {errors.map(error => (
                      <p className='text-danger error-message' key={error.code}>* {error.message}</p>
                    ))}
                  </div>
                </li>
                <button
                  type="button"
                  onClick={() => removeRejected(file.name)}
                  className="delete-button"
                >
                  Remove
                </button>
              </div>

            ))}
          </div>
        </div>
      ) : (
        <></>
      )}


    </section>
  )
}

export default DropZone