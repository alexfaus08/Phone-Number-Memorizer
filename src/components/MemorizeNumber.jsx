import React, { useState, useEffect } from 'react'
import Row from './Row'
import PhoneNumberHint from './PhoneNumberHint'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import { Button, Dialog, DialogTitle } from '@mui/material'
import Stack from '@mui/material/Stack'
import StepTracker from './StepTracker'
import Typography from '@mui/material/Typography'
import { useSelector, useDispatch } from 'react-redux'
import { resetValidDigits } from '../features/validDigitsSlice'
import { showValidity, hideValidity } from '../features/showValiditySlice'

const MemorizeNumber = (props) => {
  const dispatch = useDispatch()
  const validDigits = useSelector((state) => state.validDigits.value)
  const [step, setStep] = useState(0)
  const [open, setOpen] = useState(false)
  const digits = props.phoneNumber.split('')

  const restartProcess = (newNum = false) => {
    dispatch(hideValidity())
    if (newNum) {
      props.restart()
    } else {
      setStep(0)
    }
    handleClose()
  }

  useEffect(() => {
    if (step < 5) {
      let firstInput = document.querySelector(
        'input[name=\'digit-0\']'
      )
      if (firstInput.disabled) {
        firstInput = document.querySelector(
          'input[name=\'digit-1\']'
        )
      }
      firstInput.focus()
    }
  }, [step])

  const handleStep = (newStep) => {
    setStep(newStep)
  }

  const nextStep = () => {
    if (validDigits.includes(false)) {
      dispatch(showValidity())
    } else {
      dispatch(hideValidity())
      let value = step
      value += 1
      setStep(value)
      dispatch(resetValidDigits())
    }
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
        <>
          <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {'Restart Process'}
            </DialogTitle>
            <Stack sx={{ pl: 5, pr: 5, pb: 2 }} spacing={2}>
              <Button onClick={() => restartProcess(true)} variant="contained">
                New Phone Number
              </Button>
              <Button onClick={() => restartProcess(false)} variant="contained">
                Same Phone Number
              </Button>
            </Stack>
          </Dialog>
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
                            <Row digits={digits.slice(0, 3)} step={step}
                                rowID={0}/>
                            <Row digits={digits.slice(3, 6)} step={step} rowID={1}/>
                            <Row digits={digits.slice(6, 10)} step={step} rowID={2}/>
                          </Stack>
                        </Grid>
                      </Grid>
                      <Stack spacing={5}>
                        <Box>
                          <Button
                              id="next-step"
                              onClick={ nextStep }
                              sx={{ float: 'right' }}
                          >
                            {step < 4 ? 'Next Step' : 'Done!'}
                          </Button>
                          <Button
                              onClick={ handleClickOpen }
                              sx={{ float: 'left' }}
                          >
                            Restart
                          </Button>
                        </Box>
                        <StepTracker step={step} onChangeStep={handleStep} />
                      </Stack>
                    </div>
                  </Container>
                </>
            }
            {
                step > 4 &&
                    <Stack spacing={2} alignItems="center">
                      <Typography variant="h4" component="div" sx={{ mb: 2 }}>
                        You did it! 🥳
                      </Typography>
                      <Button
                          onClick={ () => restartProcess(true) }
                          variant="contained"
                          sx={{ float: 'left' }}
                      >
                        Restart with New number
                      </Button>
                      <Button
                          onClick={ () => restartProcess(false) }
                          variant="contained"
                          sx={{ float: 'left' }}
                      >
                        Restart with same number
                      </Button>
                    </Stack>
            }
        </>
  )
}

export default MemorizeNumber
