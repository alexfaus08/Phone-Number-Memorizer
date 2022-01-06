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
                props.isActive &&
                    <>
                      <Row digits={digits.slice(0, 3)} step={step} />
                      <Row digits={digits.slice(3, 6)} step={step} />
                      <Row digits={digits.slice(6, 10)} step={step} />
                    </>
            }
          <Button
              onPress={ nextStep }
              title="Next step!"
              color="#841584"
          />
        </>
  )
}

export default MemorizeNumber
