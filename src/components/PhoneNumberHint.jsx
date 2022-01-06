import React, { useState } from 'react'
import { Button } from 'react-native'

const PhoneNumberHint = (props) => {
  const [isVisible, setIsVisible] = useState(false)

  const handleClick = () => {
    setIsVisible((isVisible) => (!isVisible))
  }

  return <div className="hint">
      <Button
          title={isVisible ? 'Hide Hint' : 'Show Hint'}
          onPress={handleClick}
      />
      <div className="number-hint">
        {
          isVisible && <>
            <div>
              {props.phoneNumber.slice(0, 3)}
            </div>
            <div>
              {props.phoneNumber.slice(3, 6)}
            </div>
            <div>
              {props.phoneNumber.slice(6, 10)}
            </div>
          </>
        }
      </div>

  </div>
}

export default PhoneNumberHint
