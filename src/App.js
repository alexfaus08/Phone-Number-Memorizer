import './App.css'
import React, { useState } from 'react'
import PhoneNumberInput from './components/PhoneNumberInput'
import MemorizeNumber from './components/MemorizeNumber'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

function App () {
  const [phoneNumber, setPhoneNumber] = useState('1234567890')
  const [inputIsActive, setInputIsActive] = useState(true)
  return (
      <>
          <Stack alignItems="center">
              <Typography variant="h3" component="div" gutterBottom>
                  Phone Number Memorizing Tool
              </Typography>
              <PhoneNumberInput phoneNumber={phoneNumber} passNumberData={setPhoneNumber} isActive={inputIsActive} changeVisibility={setInputIsActive} />
              {
                  !inputIsActive &&
                      <>
                          <MemorizeNumber phoneNumber={phoneNumber} isActive={!inputIsActive} changeVisibility={setInputIsActive}/>
                      </>
              }
          </Stack>
      </>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     padding: 20,
//     margin: 10
//   }
// })

export default App
