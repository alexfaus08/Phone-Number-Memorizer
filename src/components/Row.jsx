import React, { useEffect, useState } from 'react'
import Digit from './Digit'

const Row = (props) => {
  const [isLastRow, setIsLastRow] = useState(false)

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
    temp[1] = {
      editable: false,
      digit: '-',
      clear: true
    }
    if (isLastRow) {
      temp[2] = {
        editable: false,
        digit: '-',
        clear: true
      }
    }
    return temp
  }

  const disableFirstDigit = (digits) => {
    const temp = hideAllDigits([...digits])
    temp[0] = {
      editable: false,
      digit: '-',
      clear: true
    }
    return temp
  }

  const disableLastDigit = (digits) => {
    const temp = hideAllDigits([...digits])
    if (isLastRow) {
      temp[3] = {
        editable: false,
        digit: '-',
        clear: true
      }
    } else {
      temp[2] = {
        editable: false,
        digit: '-',
        clear: true
      }
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
      return <Digit digit={digit.digit} key={id} editable={digit.editable} step={props.step} />
    })
  }

  return <div className="row">
    {renderDigits()}
  </div>
}

export default Row
