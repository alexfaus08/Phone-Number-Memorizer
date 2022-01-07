import React, { useState } from 'react'
import Help from '@mui/icons-material/Help'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

const PhoneNumberHint = (props) => {
  const [isVisible, setIsVisible] = useState(false)

  return <Stack>
      <Box sx={{ visibility: isVisible ? 'visible' : 'hidden' }}>
          <div className="number-hint">
              <div>
                  {props.phoneNumber.slice(0, 3)}
              </div>
              <div>
                  {props.phoneNumber.slice(3, 6)}
              </div>
              <div>
                  {props.phoneNumber.slice(6, 10)}
              </div>
          </div>
      </Box>
      <Chip
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          icon={<Help />}
          label="Hover for a hint..."
      />
  </Stack>
}

export default PhoneNumberHint
