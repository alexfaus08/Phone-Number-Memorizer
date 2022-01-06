import React, { useState } from 'react'
import { Button, View } from 'react-native'

const PhoneNumberHint = (props) => {
  const [isVisible, setIsVisible] = useState(false)

  const handleClick = () => {
    setIsVisible((isVisible) => (!isVisible))
  }

  return <div className="hint">
    <View style={[{ width: '25%' }]}>
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
    </View>
  </div>
}

export default PhoneNumberHint
