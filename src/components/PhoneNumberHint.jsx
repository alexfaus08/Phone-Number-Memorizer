import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { Button } from '@mui/material'

const PhoneNumberHint = (props) => {
  const [isVisible, setIsVisible] = useState(false)

  const handleClick = () => {
    setIsVisible((isVisible) => (!isVisible))
  }

  return <div className="hint">
      <Button
          onClick={handleClick}
          variant="contained"
          startIcon={<VisibilityIcon />}
      >
         {isVisible ? 'Hide Hint' : 'Show Hint'}
      </Button>
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
