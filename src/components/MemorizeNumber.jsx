import React, { useEffect, useState } from 'react'
import Digit from './Digit'

const MemorizeNumber = (props) => {
  const [firstDigits, setFirstDigits] = useState([
    {
      digit: 0,
      editable: true
    },
    {
      digit: 0,
      editable: true
    },
    {
      digit: 0,
      editable: true
    }
  ])
  const [middleDigits, setMiddleDigits] = useState([])
  const [lastDigits, setLastDigits] = useState([])
  // on component mount
  useEffect(() => {
    const digits = props.phoneNumber.split('')
    const tempFirstDigits = []
    const tempMiddleDigits = []
    const tempLastDigits = []
    digits.slice(0, 3).forEach((digit) => {
      tempFirstDigits.push({
        digit: digit,
        editable: true
      })
    })
    digits.slice(3, 6).forEach((digit) => {
      tempMiddleDigits.push({
        digit: digit,
        editable: true
      })
    })
    digits.slice(6, 10).forEach((digit) => {
      tempLastDigits.push({
        digit: digit,
        editable: true
      })
    })
    setFirstDigits(tempFirstDigits)
    setMiddleDigits(tempMiddleDigits)
    setLastDigits(tempLastDigits)
  }, [])

  return (
        <>
            {
                props.isActive &&
                    <>
                        <div className="row">
                            {firstDigits.map((entry, id) => {
                              return <Digit digit={entry.digit} key={id} editable={entry.editable} />
                            })}
                        </div>
                        <div className="row">
                            {middleDigits.map((entry, id) => {
                              return <Digit digit={entry.digit} key={id} editable={entry.editable} />
                            })}
                        </div>
                        <div className="row">
                            {lastDigits.map((entry, id) => {
                              return <Digit digit={entry.digit} key={id} editable={entry.editable} />
                            })}
                        </div>
                    </>
            }
        </>
  )
}

export default MemorizeNumber
