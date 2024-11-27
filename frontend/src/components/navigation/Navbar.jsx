import React from 'react'
import Stack from '@mui/material/Stack';
import { Box, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <Box>
      <Stack width={'90%'} mt={2} mx={'auto'} direction={'row'} justifyContent={'space-between'}>
        <Stack color={'primary.main'} >
           REDUCE TAX
        </Stack>
        <Stack spacing={2} direction={'row'}>
        <Button variant='contained' color='blue'>Signup</Button >
          <IconButton ><MenuIcon/></IconButton>
          <Button variant='text' color='text'>Tools</Button >
          <Button variant='text' color='text'>Services</Button >
          <Button variant='contained' color='blue'>Signup</Button >
          <Button variant='contained' color='blue'>Login</Button >
        </Stack>
      </Stack>
    </Box>
  )
}

export default Navbar
