import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import Box from '@mui/material/Box'

export const PhoneNumberInput = (props) => {
  const [isValidPhoneNum, setIsValidPhoneNum] = useState(false)
  const [displayHelpText, setDisplayHelpText] = useState(false)

  const handleNumberChange = event => {
    props.passNumberData(event.target.value)
    if (event.target.value.length === 10) {
      setIsValidPhoneNum(true)
      setDisplayHelpText(false)
    } else {
      setIsValidPhoneNum(false)
    }
  }

  const onPressMemorize = () => {
    if (isValidPhoneNum) {
      props.changeVisibility(false)
      // for reset
      setIsValidPhoneNum(false)
      setDisplayHelpText(false)
    } else {
      setDisplayHelpText(true)
    }
  }

  return (
        <>
            {
                props.isActive &&
                <View style={styles.container}>
                  <Typography variant="h5" component="div" gutterBottom>
                    Enter a Phone Number
                  </Typography>
                  <Box>
                    <TextField
                        error={!isValidPhoneNum && displayHelpText}
                        helperText={ displayHelpText ? 'Enter a 10 digit phone number' : '' }
                        required
                        onChange={handleNumberChange}
                        value={props.phoneNumber}
                        inputProps={{
                          maxLength: 10
                        }}/>
                  </Box>
                  <Box sx={{ p: 2 }}>
                    <Button
                        onClick={onPressMemorize}
                        variant="contained"
                    >
                      Time to Memorize!
                    </Button>
                  </Box>
                </View>
            }
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
