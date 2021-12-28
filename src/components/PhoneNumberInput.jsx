import React from 'react'
import { Box, TextField } from '@mui/material';
import { Button } from '@mui/material';

export const PhoneNumberInput = () => {
    return (
        <div>
            <Box sx={{ 
                marginTop: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <TextField label='Phone Number' variant='outlined' fullWidth placeholder='123-456-7890'/>
                <Button variant="outlined" sx={{
                    marginTop: 2,
                }}>Start Memorizing!</Button>
            </Box>
        </div>
    )
}


export default PhoneNumberInput;