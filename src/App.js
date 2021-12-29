import './App.css'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import PhoneNumberInput from './components/PhoneNumberInput'
import MemorizeNumber from './components/MemorizeNumber'

function App () {
  const [phoneNumber, setPhoneNumber] = useState('1234444444')
  const [inputIsActive, setInputIsActive] = useState(true)
  return (
      <>
          <View style={styles.container}>
              <h1>
                  Phone Number Memorizing Tool
              </h1>
              <PhoneNumberInput phoneNumber={phoneNumber} passNumberData={setPhoneNumber} isActive={inputIsActive} changeVisibility={setInputIsActive} />
              {
                  !inputIsActive &&
                      <>
                          <MemorizeNumber phoneNumber={phoneNumber} isActive={!inputIsActive} changeVisibility={setInputIsActive}/>
                      </>
              }
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
