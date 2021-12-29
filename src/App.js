import './App.css'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import PhoneNumberInput from './components/PhoneNumberInput'
import MemorizeNumber from './components/MemorizeNumber'

function App () {
  const [phoneNumber, setPhoneNumber] = useState('123-444-4444')
  const [inputIsActive, setInputIsActive] = useState(true)
  return (
      <>
          <View style={styles.container}>
              <h2>
                  Enter a Phone Number
              </h2>
              <PhoneNumberInput phoneNumber={phoneNumber} passNumberData={setPhoneNumber} isActive={inputIsActive} changeVisibility={setInputIsActive} />
              <MemorizeNumber phoneNumber={phoneNumber} isActive={!inputIsActive} changeVisibility={setInputIsActive}/>
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
