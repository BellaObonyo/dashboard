import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "../Components/dashboard.css";
import "../Components/Main.css";
import "../App.css";



function ResidentialAreanSection() {
  return (
    <div id="header">
      <div className='manageTenants'>
      <Stack spacing={2} direction="row">
         <Button variant="contained">Residential</Button>
       </Stack>
      </div>
      <div className='manageTenants'>
      <Stack spacing={2} direction="row">
         <Button variant="contained">Hostel</Button>
       </Stack>
      </div>
    </div>
  );
}

export default ResidentialAreanSection;
