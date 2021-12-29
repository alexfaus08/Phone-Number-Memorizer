import React from 'react'
import { useSelector } from 'react-redux'

const MemorizeNumber = () => {
  const num = useSelector(state => state.phoneNumber.value)

  return (
        <div>
            Time to memorize: { num }
        </div>
  )
}

export default MemorizeNumber
