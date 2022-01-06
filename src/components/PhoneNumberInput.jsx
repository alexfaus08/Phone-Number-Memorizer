import React from 'react'
import { View, StyleSheet } from 'react-native'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import Box from '@mui/material/Box'

export const PhoneNumberInput = (props) => {
  const handleNumberChange = event => {
    props.passNumberData(event.target.value)
  }

  const onPressMemorize = () => {
    props.changeVisibility(false)
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
                        onChange={handleNumberChange}
                        value={props.phoneNumber} />
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
