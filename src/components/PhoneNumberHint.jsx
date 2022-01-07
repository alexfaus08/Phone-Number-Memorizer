import React, { useState } from 'react'
import Help from '@mui/icons-material/Help'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Collapse from '@mui/material/Collapse'

const PhoneNumberHint = (props) => {
  const [isVisible, setIsVisible] = useState(false)

  return <Stack>
      <Chip
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          icon={<Help />}
          label="Hover for a hint..."
      />
      <Box>
          <Collapse in={isVisible}>
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
          </Collapse>
      </Box>
  </Stack>
}

export default PhoneNumberHint
