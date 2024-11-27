import React from 'react'
import Stack from '@mui/material/Stack';
import { Box, Button } from '@mui/material';

function Navbar() {
  return (
    <Box>
      <Stack width={'90%'} direction={'row'} justifyContent={'space-between'}>
        <Stack >
            Reduce Tax
        </Stack>
        <Stack spacing={2} direction={'row'}>
          <Button variant='text'>Home</Button >
          <Button variant='text'>Tools</Button >
          <Button variant='text'>Services</Button >
          <Button variant='contained' color='blue'>Signup</Button >
          <Button variant='contained' color='blue'>Login</Button >
        </Stack>
      </Stack>
    </Box>
  )
}

export default Navbar
