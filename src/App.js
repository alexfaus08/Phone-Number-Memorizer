import logo from './logo.svg';
import './App.css';
import PhoneNumberInput from './components/PhoneNumberInput';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CssBaseline } from '@mui/material';
import { Container } from '@mui/material';


function App() {
  return (
    <div>
      <CssBaseline />
      <Container maxWidth='md'>
        <Box 
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
          <Typography variant="h2" component="div" gutterBottom>
            Enter a Phone Number
          </Typography>
          <PhoneNumberInput />
        </Box>
      </Container>
    </div>
  );
}

export default App;
