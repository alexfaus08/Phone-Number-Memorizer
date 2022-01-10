import React, { useEffect, useState } from 'react'
import Digit from './Digit'
import Stack from '@mui/material/Stack'

const Row = (props) => {
  const [isLastRow, setIsLastRow] = useState(false)
  const [validDigits, setValidDigits] = useState(new Array(props.digits.length).fill(false))

  const handleDigitValidation = (digit) => {
    // when a digit validity changes, change validDigits
    // this will also trigger useEffect() of validDigits
    const temp = [...validDigits]
    temp[digit.id] = digit.valid
    setValidDigits(temp)
  }

  useEffect(() => {
    // when valid digits changes, pass new validity to parent Memorize Number
    const valid = !validDigits.includes(false)
    props.memNumCallback({ id: props.rowID, valid: valid })
    console.log('Valid Digits:', validDigits)
  }, validDigits)

  const disabledDigit = {
    editable: false,
    digit: 'X',
    clear: true
  }

  useEffect(() => {
    if (props.digits.length === 4) {
      setIsLastRow(true)
    }
  }, [])

  const hideAllDigits = (digits) => {
    digits.forEach((digit) => {
      digit.digit = '?'
      digit.clear = true
    })
    return digits
  }
  const disableMiddleDigit = (digits) => {
    const temp = hideAllDigits([...digits])
    temp[1] = disabledDigit
    if (isLastRow) {
      temp[2] = disabledDigit
    }
    return temp
  }

  const disableFirstDigit = (digits) => {
    const temp = hideAllDigits([...digits])
    temp[0] = disabledDigit
    return temp
  }

  const disableLastDigit = (digits) => {
    const temp = hideAllDigits([...digits])
    if (isLastRow) {
      temp[3] = disabledDigit
    } else {
      temp[2] = disabledDigit
    }
    return temp
  }

  const applyStep = (digits) => {
    switch (props.step) {
      case (1):
        return disableMiddleDigit(digits)
      case (2):
        return disableLastDigit(digits)
      case (3):
        return disableFirstDigit(digits)
      default:
        return hideAllDigits(digits)
    }
  }

  const renderDigits = () => {
    let digitInputs = []
    props.digits.forEach((digit) => {
      digitInputs.push({
        digit: digit.toString(),
        editable: true,
        clear: true
      })
    })
    if (props.step !== 0) {
      digitInputs = applyStep(digitInputs)
    }
    return digitInputs.map((digit, id) => {
      return <Digit digit={digit.digit} key={id} digitId={id} editable={digit.editable} step={props.step} expectedValue={props.digits[id]} validation={props.validation} rowCallback={handleDigitValidation} />
    })
  }

  return <Stack direction="row" spacing={2}>
    {renderDigits()}
  </Stack>
}

export default Row
