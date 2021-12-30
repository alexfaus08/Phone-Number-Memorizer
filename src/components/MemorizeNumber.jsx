import React, { useEffect, useState } from 'react'
import Digit from './Digit'

const MemorizeNumber = (props) => {
  const [firstDigits, setFirstDigits] = useState([])
  const [middleDigits, setMiddleDigits] = useState([])
  const [lastDigits, setLastDigits] = useState([])
  useEffect(() => {
    const digits = props.phoneNumber.split('')
    setFirstDigits(digits.slice(0, 3))
    setMiddleDigits(digits.slice(3, 6))
    setLastDigits(digits.slice(6, 10))
  }, [])

  return (
        <>
            {
                props.isActive &&
                    <>
                        <div className="row">
                            {firstDigits.map((digit, id) => {
                              return <Digit digit={digit} key={id} />
                            })}
                        </div>
                        <div className="row">
                            {middleDigits.map((digit, id) => {
                              return <Digit digit={digit} key={id} />
                            })}
                        </div>
                        <div className="row">
                            {lastDigits.map((digit, id) => {
                              return <Digit digit={digit} key={id} />
                            })}
                        </div>
                    </>
            }
        </>
  )
}

export default MemorizeNumber
