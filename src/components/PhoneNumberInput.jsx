import React from 'react'
import { View, TextInput, Button } from 'react-native'

export const PhoneNumberInput = (props) => {
  const handleNumberChange = (event) => {
    props.phoneNumber = event.target.value
  }

  const onPressMemorize = () => {
    props.isActive = false
  }

  return (
        <div>
            <View>
                <h1>Phone Number Memorizing Tool</h1>
                <TextInput>
                    onChangeText={handleNumberChange}
                    value={props.phoneNumber}
                </TextInput>
                <Button
                    onPress={onPressMemorize}
                    title="Time to Memorize"
                    color="#841584"
                    accessibilityLabel="Click to start memorizing a phone number"
                />
            </View>
        </div>
  )
}

export default PhoneNumberInput
