import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

export const PhoneNumberInput = (props) => {
  const handleNumberChange = (newNum) => {
    props.passNumberData(newNum)
  }

  const onPressMemorize = () => {
    props.changeVisibility(false)
  }

  return (
        <div>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={handleNumberChange}
                    value={props.phoneNumber} />
                <Button
                    style={styles.button}
                    onPress={onPressMemorize}
                    title="Time to Memorize"
                    color="#841584"
                    accessibilityLabel="Click to start memorizing a phone number"
                />
            </View>
        </div>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    margin: 10
  },
  button: {
    flex: 0.3,
    backgroundColor: 'grey',
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
})

export default PhoneNumberInput
