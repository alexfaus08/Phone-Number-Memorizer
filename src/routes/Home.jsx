import React from 'react'
import { Container, Box, Typography } from '@mui/material';
import PhoneNumberInput from '../components/PhoneNumberInput';

const Home = () => {
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
    )
}

export default Home
