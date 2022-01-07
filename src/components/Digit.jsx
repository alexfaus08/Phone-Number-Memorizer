import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'

const Digit = (props) => {
  const [value, setValue] = useState('')
  const [isValid, setIsValid] = useState(true)

  useEffect(() => {
    setValue('')
  }, [props.step])

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
          <TextField className="digitInput" error={!isValid} disabled={!props.editable} placeholder={props.digit} onChange={handleTextInputChange} value={value}
          inputProps={{
            maxLength: 1,
            style: { textAlign: 'center' }
          }
          } />
        </>
  )
}

export default Digit
