import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility'
import IconButton from '@mui/material/IconButton'

const PhoneNumberHint = (props) => {
  const [isVisible, setIsVisible] = useState(false)

  const handleClick = () => {
    setIsVisible((isVisible) => (!isVisible))
  }

  return <div className="hint">
      <IconButton
          onClick={handleClick}
          variant="contained"
      >
          <VisibilityIcon />
         {isVisible ? 'Hide Hint' : 'Show Hint'}
      </IconButton>
      <div className="number-hint">
        {
          isVisible && <>
            <div>
              {props.phoneNumber.slice(0, 3)}
            </div>
            <div>
              {props.phoneNumber.slice(3, 6)}
            </div>
            <div>
              {props.phoneNumber.slice(6, 10)}
            </div>
          </>
        }
      </div>

  </div>
}

export default PhoneNumberHint
