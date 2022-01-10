import React from 'react'
import Container from '@mui/material/Container'
import { AppBar, Link, Toolbar } from '@mui/material'
import Typography from '@mui/material/Typography'

const Footer = () => {
  return <>
      <AppBar position="absolute" color="primary" sx={{ top: 'auto', bottom: 0 }}>
          <Container maxWidth="md">
              <Toolbar>
                  <Typography variant="body1" color="inherit" sx={{ flexGrow: 1, textAlign: 'center' }}>
                      Memorization Technique Credit to
                      <Link href="https://www.youtube.com/watch?v=0Ip0xFIPuhc&t=338s" color="#d4c2ff" underline="hover"> Nelson Dellis on YouTube</Link>
                  </Typography>
                  <Typography variant="body1" color="inherit" sx={{ flexGrow: 1, textAlign: 'center' }}>
                      Website by <Link href="https://www.linkedin.com/in/h-alexander-faus-63605819a/" color="#d4c2ff" underline="hover">Alexander Faus</Link>
                  </Typography>
              </Toolbar>
          </Container>
      </AppBar>
  </>
}

export default Footer
