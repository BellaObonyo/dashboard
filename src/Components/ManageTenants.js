import React from 'react';
import "../styles.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



const ManageButton = () => {
  return (
      <div>
      <Stack spacing={2} direction="row">
         <Button variant="contained">Manage Tenants</Button>
       </Stack>
      </div>
      );
};

export default ManageButton;
