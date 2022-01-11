import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'

const Digit = (props) => {
  const [value, setValue] = useState('')
  useEffect(() => {
    setValue('')
  }, [props.step])

  useEffect(() => {
    if (value === props.correctDigit) {
      console.log('Valid!')
    }
  }, [props.stepEnding])

  const handleTextInputChange = event => {
    setValue(event.target.value)
  }

  return (
        <>
          <TextField className="digitInput" disabled={!props.editable} placeholder={props.digit} onChange={handleTextInputChange} value={value} autoComplete='off'
          inputProps={{
            maxLength: 1,
            style: { textAlign: 'center' }
          }
          } />
        </>
  )
}

export default Digit
