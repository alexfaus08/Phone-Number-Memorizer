import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'

const Digit = (props) => {
  const [value, setValue] = useState('')
  useEffect(() => {
    setValue('')
  }, [props.step])

  const handleTextInputChange = event => {
    setValue(event.target.value)
  }

  return (
        <div className="digit">
          <TextField className="digitInput" disabled={!props.editable} placeholder={props.digit} onChange={handleTextInputChange} value={value}
          inputProps={{
            maxLength: 1,
            style: { textAlign: 'center' }
          }
          } />
        </div>
  )
}

export default Digit
