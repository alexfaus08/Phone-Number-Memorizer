import logo from './logo.svg';
import './App.css';
import PhoneNumberInput from './components/PhoneNumberInput';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div>
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
