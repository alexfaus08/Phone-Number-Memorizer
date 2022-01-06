import React, { useState } from 'react'
import { Button } from 'react-native'
import Row from './Row'
import PhoneNumberHint from './PhoneNumberHint'

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
                props.isActive && step <= 4 &&
                    <div className="columns">
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
                            onPress={ nextStep }
                            title={step < 4 ? 'Next Step' : 'Done!'}
                            color="#841584"
                        />
                      </div>
                    </div>
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
