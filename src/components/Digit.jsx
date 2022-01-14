import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import { useDispatch } from 'react-redux'
import { addDigit } from '../features/validDigitsSlice'

const Digit = (props) => {
  const dispatch = useDispatch()

  const [value, setValue] = useState('')
  useEffect(() => {
    setValue('')
  }, [props.step])

  const handleTextInputChange = event => {
    setValue(event.target.value)
    if (event.target.value === props.correctDigit) {
      dispatch(addDigit({ digitID: props.digitID, rowID: props.rowID, value: true }))
    } else {
      dispatch(addDigit({ digitID: props.digitID, rowID: props.rowID, value: false }))
    }
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
