import React from 'react';
import Button from '@mui/material/Button';
import styled from 'styled-components';

const CustomButton = styled(Button)`
    margin-top: 20px !important;
`;


function DownloadButton({url, fileName, text}) {
    const handleDownload = (path, file) =>{
        fetch(path, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/pdf',
            },
        })
        .then((response) => response.blob())
        .then((blob) => {
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', file);
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        })
        .catch((error) => console.error('Error downloading the file:', error));     
    }

  return (
    <>
        <CustomButton variant="outlined" color="warning" onClick={()=>handleDownload(url,fileName)}>{text}</CustomButton>
    </>
  )
}

export default DownloadButton;
