import React from 'react'
import Digit from './Digit'

const Row = (props) => {
  const renderDigits = () => {
    const digitInputs = []
    props.digits.forEach((digit) => {
      digitInputs.push({
        digit: digit.toString(),
        editable: true,
        clear: true
      })
    })
    return digitInputs.map((digit, id) => {
      return <Digit digit={digit.digit} key={id} editable={digit.editable} clear={digit.clear} />
    })
  }

  return <div className="row">
    {renderDigits()}
  </div>
}

export default Row
