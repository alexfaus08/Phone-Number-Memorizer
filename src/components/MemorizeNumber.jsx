import React from 'react'

const MemorizeNumber = (props) => {
  return (
        <>
            {
                props.isActive &&
                    <>
                        Time to memorize {props.phoneNumber}
                    </>
            }
        </>
  )
}

export default MemorizeNumber
