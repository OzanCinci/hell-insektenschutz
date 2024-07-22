import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

function NegativeNotification({buttonId, msg}) {
    const [open, setOpen] = useState(false);
    const vertical = 'top';
    const horizontal = 'right';
  
    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

  return (
    <div>
        <Stack spacing={2} sx={{ width: '100%' }}>
          <button id={buttonId} style={{display: "none"}} variant="outlined" onClick={handleClick}>
          </button>
          <Snackbar 
            anchorOrigin={{ vertical, horizontal }}
            open={open} 
            autoHideDuration={6000} 
            onClose={handleClose}>
              <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                {msg}
              </Alert>
          </Snackbar>
        </Stack>
    </div>
  )
}

export default NegativeNotification;
