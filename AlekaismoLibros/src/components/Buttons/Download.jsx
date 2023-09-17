import React from 'react';

const DownloadButton = (props) => {


  return (
    <button className="download-btn">
      <a href={props.downloadFile} download className='btn-link'>
        <span className="download-btn-content">Descarga</span>
      </a>
    </button>
  );
};

export default DownloadButton;


