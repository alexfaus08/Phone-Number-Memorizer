import React, { useState, useEffect } from 'react'
import Row from './Row'
import PhoneNumberHint from './PhoneNumberHint'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import { Button } from '@mui/material'
import Stack from '@mui/material/Stack'
import StepTracker from './StepTracker'

const MemorizeNumber = (props) => {
  const [step, setStep] = useState(0)
  const digits = props.phoneNumber.split('')
  const [showValidation, setShowValidation] = useState(false)
  const [validRows, setValidRows] = useState([true, true, true])

  const handleRowValidation = (event) => {
    const temp = [...validRows]
    temp[event.id] = event.valid
    setValidRows(temp)
  }

  useEffect(() => {
    console.log(validRows)
  }, [validRows])

  const showInvalidDigits = () => {
    setShowValidation(true)
  }

  const nextStep = () => {
    let value = step
    value += 1
    setStep(value)
  }

  return (
        <>
            {
                props.isActive && step <= 4 && <>
                  <CssBaseline />
                  <Container maxWidth="lg">
                    <div>
                      <Grid container>
                        <Grid item xs={2}>
                          <PhoneNumberHint phoneNumber={digits} />
                        </Grid>
                        <Grid item xs={8}>
                          <Stack alignItems="center">
                            <Row digits={digits.slice(0, 3)} step={step} validation={showValidation} isRowValid={handleRowValidation} rowID={0}/>
                            <Row digits={digits.slice(3, 6)} step={step} validation={showValidation} isRowValid={handleRowValidation} rowID={1}/>
                            <Row digits={digits.slice(6, 10)} step={step} validation={showValidation} isRowValid={handleRowValidation} rowID={2}/>
                          </Stack>
                        </Grid>
                      </Grid>
                      <Stack>
                        <Box>
                          <Button
                              onClick={ showInvalidDigits }
                          >
                            Validate
                          </Button>
                          <Button
                              onClick={ nextStep }
                              sx={{ float: 'right' }}
                          >
                            {step < 4 ? 'Next Step' : 'Done!'}
                          </Button>
                        </Box>
                        <StepTracker step={step} />
                      </Stack>
                    </div>
                  </Container>
                </>
            }
            {
                step > 4 &&
                    <>
                    <h2>Congrats!</h2>
                    </>
            }
        </>
  )
}

export default MemorizeNumber
