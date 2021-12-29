import React from 'react'
import { useSelector } from 'react-redux'
import { Box } from '@mui/system'
import { TextField } from '@mui/material'

const generateNumberPlaceholder = (number) => {
    let placeholder = number.replaceAll('-', '\n');
    return placeholder;
}

const MemorizeNumber = () => {
    const num = useSelector(state => state.phoneNumber.value)
    const placeholder = generateNumberPlaceholder(num);
    return (
        <div>
            <Box sx={{ 
                marginTop: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
            Time to memorize: { num } 
            <br />
            Type the number vertically: 
            <TextField
              multiline
              sx={{ textAlign: "center" }}
              placeholder={placeholder}
              rows={3}
            />
            </Box>
        </div>
    )
}

export default MemorizeNumber
