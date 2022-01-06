import React, { useEffect, useState } from 'react'
import { TextInput, StyleSheet } from 'react-native'

const Digit = (props) => {
  const [value, setValue] = useState('')
  useEffect(() => {
    if (props.clear) {
      setValue('')
    }
  }, [props.clear])

  return (
        <div className="digit">
            <TextInput placeholder={props.digit} style={styles.input} editable={props.editable} onChangeText={setValue} value={value} maxLength={1} />
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
