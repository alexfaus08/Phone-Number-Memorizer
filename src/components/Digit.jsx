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

  const digitName = () => {
    let newDigitID = props.digitID
    if (props.rowID === 1) {
      newDigitID += 3
    }
    if (props.rowID === 2) {
      newDigitID += 6
    }
    return `digit-${newDigitID}`
  }

  const nextDigitName = (previousID) => {
    let newDigitID = previousID
    if (props.rowID === 1) {
      newDigitID += 3
    }
    if (props.rowID === 2) {
      newDigitID += 6
    }
    newDigitID += 1
    return `digit-${newDigitID}`
  }

  const focusNextDigit = () => {
    let idx = props.digitID
    let nextInput = null
    let lastDigit = true
    for (idx; idx < 10; idx += 1) {
      const inputName = nextDigitName(idx)
      nextInput = document.querySelector(
          `input[name=${inputName}]`
      )
      if (nextInput && !nextInput?.disabled) {
        lastDigit = false
        break
      }
    }
    if (!lastDigit) {
      nextInput.focus()
      nextInput.select()
    } else {
      const nextStep = document.getElementById('next-step')
      if (nextStep) {
        nextStep.focus()
      }
    }
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
    if (event.target.value !== '') {
      focusNextDigit()
    }
  }

  return (
        <>
          <TextField className="digitInput" error={!isValid && showValidity} disabled={!props.editable} placeholder={props.digit} onChange={handleTextInputChange} value={value} autoComplete='off'
          inputProps={{
            maxLength: 1,
            style: { textAlign: 'center' },
            name: digitName()
          }
          } />
        </>
  )
}

export default Digit
