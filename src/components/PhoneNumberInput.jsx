import React from 'react'
import { Box, TextField } from '@mui/material';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

export const PhoneNumberInput = () => {
    const num = useSelector(state => state.phoneNumber.value)
    let navigate = useNavigate();
    console.log(num);
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
                }}   
                onClick={() => {
                    navigate('/memorize')
                  }}>
                Start Memorizing!
                </Button>
            </Box>
            The number is: { num }
        </div>
    )
}


export default PhoneNumberInput;