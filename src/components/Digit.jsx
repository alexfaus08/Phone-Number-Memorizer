import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const Digit = (props) => {
  return (
        <div className="digit">
            <TextInput placeholder={props.digit} style={styles.input} />
        </div>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
})

export default Digit
