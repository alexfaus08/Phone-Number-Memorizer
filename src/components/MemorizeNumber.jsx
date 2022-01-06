import React, { useState } from 'react'
import Row from './Row'
import PhoneNumberHint from './PhoneNumberHint'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import { Button } from '@mui/material'

const MemorizeNumber = (props) => {
  const [step, setStep] = useState(0)
  const digits = props.phoneNumber.split('')

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
                  <Container maxWidth="sm">
                    <div>
                      <PhoneNumberHint phoneNumber={digits} />
                    </div>
                    <div>
                      <h1>Step: { step }</h1>
                      <div className="rows">
                        <Row digits={digits.slice(0, 3)} step={step}/>
                        <Row digits={digits.slice(3, 6)} step={step}/>
                        <Row digits={digits.slice(6, 10)} step={step}/>
                      </div>
                      <Button
                          onClick={ nextStep }
                      >
                        {step < 4 ? 'Next Step' : 'Done!'}
                      </Button>
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
