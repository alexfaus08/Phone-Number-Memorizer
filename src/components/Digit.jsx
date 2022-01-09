import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'

const Digit = (props) => {
  const [value, setValue] = useState('')
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    setValue('')
    setIsValid(false)
  }, [props.step])

  useEffect(() => {
    // if the validity of the digit changes, pass it to Row parent
    props.rowCallback(isValid)
  }, [isValid])

  const handleTextInputChange = event => {
    setValue(event.target.value)
    validate(event.target.value)
  }

  const validate = num => {
    if (num === props.expectedValue) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }

  return (
        <>
          <TextField className="digitInput" error={!isValid && props.validation} disabled={!props.editable} placeholder={props.digit} onChange={handleTextInputChange} value={value} autoComplete='off'
          inputProps={{
            maxLength: 1,
            style: { textAlign: 'center' }
          }
          } />
        </>
  )
}

export default Digit
