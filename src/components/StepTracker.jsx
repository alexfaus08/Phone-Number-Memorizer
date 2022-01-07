import React from 'react'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'

const StepTracker = (props) => {
  const steps = ['Type in number with help', 'Type number without the middle digits', 'Type number without the last digit', 'Type number without the first digit', 'Type in number without help']
  return (
        <>
            <Stepper activeStep={props.step}>
                {steps.map((label, index) => {
                  const stepProps = {}
                  const labelProps = {}
                  return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                  )
                })}
            </Stepper>
        </>
  )
}

export default StepTracker
