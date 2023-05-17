import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ResidentialAreanSection from './ResidencialArea';
import "../Components/dashboard.css";
import "../Components/Main.css";
import "../App.css";



function MainComponents() {
  return (
    <div className='headertwo'>
      <div id="header">
        <div className='addproperty'>
          <Stack spacing={2} direction="row">
            <h1>Add Property</h1>
          </Stack>
        </div>

        <div className='manageTenants'>
          <Stack spacing={2} direction="row">
            <Button variant="contained">Earn With Us</Button>
          </Stack>
        </div>
      </div>

      <ResidentialAreanSection />

    </div>

  );
}

export default MainComponents;
