import './App.css'
import React, { useState } from 'react'
import PhoneNumberInput from './components/PhoneNumberInput'
import MemorizeNumber from './components/MemorizeNumber'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Footer from './components/Footer'
import { CssBaseline } from '@mui/material'

function App () {
  const [phoneNumber, setPhoneNumber] = useState('5555555555')
  const [inputIsActive, setInputIsActive] = useState(true)

  const handleRestart = () => {
    setInputIsActive(true)
    setPhoneNumber('')
  }
  return (
      <>
          <CssBaseline />
          <Stack alignItems="center" sx={{ mt: 10 }}>
              <Typography variant="h3" component="div" gutterBottom sx={{ mb: 10 }}>
                  Phone Number Memorization Tool
              </Typography>
              <PhoneNumberInput phoneNumber={phoneNumber} passNumberData={setPhoneNumber} isActive={inputIsActive} changeVisibility={setInputIsActive} />
              {
                  !inputIsActive &&
                      <>
                          <MemorizeNumber phoneNumber={phoneNumber} isActive={!inputIsActive} changeVisibility={setInputIsActive} restart={ handleRestart }/>
                      </>
              }
          </Stack>
          <Footer />
      </>
  )
}

export default App
