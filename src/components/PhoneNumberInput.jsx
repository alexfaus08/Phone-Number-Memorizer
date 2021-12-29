import React from 'react'
import { Box, Input } from '@mui/material';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setPhoneNumber } from '../redux/phoneNumberSlice';

export const PhoneNumberInput = () => {
    const num = useSelector(state => state.phoneNumber.value)
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const handleNumberChange = (event) => {
        dispatch(setPhoneNumber(event.target.value));
    }

    return (
        <div>
            <Box sx={{ 
                marginTop: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Input label='Phone Number' variant='outlined' fullWidth placeholder='123-456-7890' value={ num } onChange={(event) => handleNumberChange(event)} />
                <Button variant="outlined" sx={{
                    marginTop: 2,
                }}   
                onClick={() => {
                    navigate('/memorize')
                  }}>
                Start Memorizing!
                </Button>
            </Box>
        </div>
    )
}


export default PhoneNumberInput;