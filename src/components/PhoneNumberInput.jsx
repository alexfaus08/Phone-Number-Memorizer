import React, { useState } from 'react'
import { Box, TextField } from '@mui/material';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

export const PhoneNumberInput = () => {
    const [number, setNumber] = useState('');
    let navigate = useNavigate();
    return (
        <div>
            <Box sx={{ 
                marginTop: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <TextField label='Phone Number' variant='outlined' fullWidth placeholder='123-456-7890' value={number} onInput={ e => setNumber(e.target.value)} />
                <Button variant="outlined" sx={{
                    marginTop: 2,
                }}   
                onClick={() => {
                    navigate('/memorize')
                  }}>
                Start Memorizing!
                </Button>
            </Box>
            { number }
        </div>
    )
}


export default PhoneNumberInput;