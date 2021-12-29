import './App.css'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import PhoneNumberInput from './components/PhoneNumberInput'

function App () {
  return (
      <>
          <View style={styles.container}>
              <h2>
                  Enter a Phone Number
              </h2>
              <PhoneNumberInput phoneNumber='123-555-4444' isActive={true} />
          </View>
      </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    margin: 10
  }
})

export default App
