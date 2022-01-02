import React, { useEffect, useState } from 'react'
import Digit from './Digit'
import { Button } from 'react-native'

const MemorizeNumber = (props) => {
  const [step, setStep] = useState(0)
  const [firstDigits, setFirstDigits] = useState([
    {
      digit: '',
      editable: true,
      clear: true
    },
    {
      digit: '',
      editable: true,
      clear: true
    },
    {
      digit: '',
      editable: true,
      clear: true
    }
  ])
  const [middleDigits, setMiddleDigits] = useState([])
  const [lastDigits, setLastDigits] = useState([])

  const nextStep = () => {
    let value = step
    value += 1
    setStep(value)
  }

  const hideMiddleDigit = () => {
    let temp = [...firstDigits]
    temp.forEach((digit) => {
      digit.digit = '?'
      digit.clear = true
    })
    temp[1] = {
      editable: false,
      digit: '-',
      clear: true
    }
    setFirstDigits(temp)
    setMiddleDigits(temp)
    temp = [...lastDigits]
    temp.forEach((digit) => {
      digit.digit = '?'
      digit.clear = true
    })
    temp[1] = {
      editable: false,
      digit: '-',
      clear: true
    }
    temp[2] = {
      editable: false,
      digit: '-',
      clear: true
    }
    setLastDigits(temp)
  }

  useEffect(() => {
    switch (step) {
      case (1):
        hideMiddleDigit()
        break
    }
  }, [step])

  // on component mount
  useEffect(() => {
    const digits = props.phoneNumber.split('')
    const tempFirstDigits = []
    const tempMiddleDigits = []
    const tempLastDigits = []
    digits.slice(0, 3).forEach((digit) => {
      tempFirstDigits.push({
        digit: digit.toString(),
        editable: true
      })
    })
    digits.slice(3, 6).forEach((digit) => {
      tempMiddleDigits.push({
        digit: digit.toString(),
        editable: true
      })
    })
    digits.slice(6, 10).forEach((digit) => {
      tempLastDigits.push({
        digit: digit.toString(),
        editable: true
      })
    })
    setFirstDigits(tempFirstDigits)
    setMiddleDigits(tempMiddleDigits)
    setLastDigits(tempLastDigits)
  }, [])

  return (
        <>
          <h1>Step: { step }</h1>
            {
                props.isActive &&
                    <>
                        <div className="row">
                            {firstDigits.map((entry, id) => {
                              return <Digit digit={entry.digit} key={id} editable={entry.editable} clear={entry.clear} />
                            })}
                        </div>
                        <div className="row">
                            {middleDigits.map((entry, id) => {
                              return <Digit digit={entry.digit} key={id} editable={entry.editable} clear={entry.clear} />
                            })}
                        </div>
                        <div className="row">
                            {lastDigits.map((entry, id) => {
                              return <Digit digit={entry.digit} key={id} editable={entry.editable} clear={entry.clear} />
                            })}
                        </div>
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
