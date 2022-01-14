import React, { useEffect, useState } from 'react'
import Digit from './Digit'
import Stack from '@mui/material/Stack'

const Row = (props) => {
  const [isLastRow, setIsLastRow] = useState(false)

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
      return <Digit name={`digit-${id}`} digit={digit.digit} key={id} correctDigit={props.digits[id]} editable={digit.editable} step={props.step} digitID={id} rowID={props.rowID} />
    })
  }

  return <Stack direction="row" spacing={2}>
    {renderDigits()}
  </Stack>
}

export default Row
