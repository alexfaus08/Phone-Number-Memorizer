import React, { useState } from 'react'
import Help from '@mui/icons-material/Help'
import Chip from '@mui/material/Chip'

const PhoneNumberHint = (props) => {
  const [isVisible, setIsVisible] = useState(false)

  return <div className="hint">
      <Chip
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          icon={<Help />}
          label="Hover for a hint..."
      />
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
