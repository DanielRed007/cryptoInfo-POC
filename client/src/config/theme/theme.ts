import { createTheme } from '@mui/material/styles';

const palette = {
  primary: {
    main: '#007bff'
  },
  secondary: {
    main: '#6c757d'
  }
};

const theme = createTheme({
  palette,
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    ...palette,
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
        default: '#333', // Dark background color
    },
    ...palette,
  },
});

export { theme, lightTheme, darkTheme };
