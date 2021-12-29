import React, { useState } from 'react'
import { Box, TextField } from '@mui/material';
import { Button } from '@mui/material';

export const PhoneNumberInput = () => {
    const [number, setNumber] = useState('');

    return (
        <div>
            <Box sx={{ 
                marginTop: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <TextField label='Phone Number' variant='outlined' fullWidth placeholder='123-456-7890' value={number} onInput={ e=>(e.target.value)} />
                <Button variant="outlined" sx={{
                    marginTop: 2,
                }}
                >Start Memorizing!
                </Button>
            </Box>
        </div>
    )
}


export default PhoneNumberInput;