import React, { useEffect, useState } from 'react'
import Digit from './Digit'

const MemorizeNumber = (props) => {
  const [digits, setDigits] = useState([])
  useEffect(() => {
    setDigits(props.phoneNumber.split(''))
  }, [])

  return (
        <>
            {
                props.isActive &&
                    <>
                        {digits.map((digit, id) => {
                          return <Digit digit={digit} key={id} />
                        })}
                    </>
            }
        </>
  )
}

export default MemorizeNumber
