import React from 'react'
import { createTheme } from '@mui/material/styles';

export let theme = createTheme({
  palette: {
    primary: {
      main: '#6415ff',
    },
    secondary: {
      main: '#edf2f7',
    },
    // text:'#243e63'
  },
});

theme = createTheme(theme, {
  // Custom colors created with augmentColor go here
  palette: {
    blue: theme.palette.augmentColor({
      color: {
        main: '#6415ff',
      },
      name: 'blue',
    }),
    text: theme.palette.augmentColor({
      color: {
        main: '#243e63',
      },
      name: 'text',
    }),
  },
});


