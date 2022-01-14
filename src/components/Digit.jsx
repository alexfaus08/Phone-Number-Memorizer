import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import { useDispatch, useSelector } from 'react-redux'
import { addDigit } from '../features/validDigitsSlice'

const Digit = (props) => {
  const dispatch = useDispatch()
  const [isValid, setIsValid] = useState(false)
  const [value, setValue] = useState('')
  const showValidity = useSelector((state) => state.showValidity.value)

  const dispatchValidityChange = (validity) => {
    dispatch(addDigit({ digitID: props.digitID, rowID: props.rowID, value: validity }))
    setIsValid(validity)
  }

  useEffect(() => {
    setValue('')
    setIsValid(false)
    if (!props.editable) {
      dispatchValidityChange(true)
    }
  }, [props.step])

  const handleTextInputChange = event => {
    setValue(event.target.value)
    if (event.target.value === props.correctDigit) {
      dispatchValidityChange(true)
    } else {
      dispatchValidityChange(false)
    }
  }

  return (
        <>
          <TextField className="digitInput" error={!isValid && showValidity} disabled={!props.editable} placeholder={props.digit} onChange={handleTextInputChange} value={value} autoComplete='off'
          inputProps={{
            maxLength: 1,
            style: { textAlign: 'center' }
          }
          } />
        </>
  )
}

export default Digit
