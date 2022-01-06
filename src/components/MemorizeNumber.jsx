import React, { useState } from 'react'
import { Button } from 'react-native'
import Row from './Row'

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
          <h1>Step: { step }</h1>
            {
                props.isActive && step < 4 &&
                    <>
                      <Row digits={digits.slice(0, 3)} step={step} />
                      <Row digits={digits.slice(3, 6)} step={step} />
                      <Row digits={digits.slice(6, 10)} step={step} />
                        <Button
                            onPress={ nextStep }
                            title={step < 3 ? 'Next Step' : 'Done!'}
                            color="#841584"
                        />
                    </>
            }
            {
                step >= 4 &&
                    <>
                    <h2>Congrats!</h2>
                    </>
            }
        </>
  )
}

export default MemorizeNumber
