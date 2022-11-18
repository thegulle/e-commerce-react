import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
      contrastText: '#fff',
    },
    secondary: {
      main: '#F5F7FA',
      contrastText: '#000',
    },
    third: {
      main: '#B55EC9',
      contrastText: '#fff',
    },
    dark: {
      main: '#000',
    },
    white: {
      main: '#fff',
    },
    error: {
      main: red.A400,
    },
    text: {
      dark: '#fff',
      white: '#000',
      lightgrey: '#919191',
    },
    product: {
      space_gray: '#2D2D2D',
      deep_purple: '#5E2A84',
      blue: '#007AFF',
      silver_aluminium: '#C0C0C0',
      midnight_aluminium: '#3A3B44'
    }
  },
});


export default theme;