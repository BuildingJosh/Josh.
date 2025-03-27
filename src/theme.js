import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0f1115',
      paper: '#161822',
    },
    primary: {
      main: '#6ee7b7',
      light: '#a7f3d0',
      dark: '#059669',
    },
    secondary: {
      main: '#f472b6',
      light: '#fbcfe8',
      dark: '#db2777',
    },
    accent: {
      gold: '#facc15',
      purple: '#a855f7',
      blue: '#3b82f6',
    },
    text: {
      primary: '#f2f2f2',
      secondary: 'rgba(242, 242, 242, 0.7)',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontFamily: '"Space Mono", monospace',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Space Mono", monospace',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Space Mono", monospace',
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"Space Mono", monospace',
      fontWeight: 700,
    },
    h5: {
      fontFamily: '"Space Mono", monospace',
      fontWeight: 700,
    },
    h6: {
      fontFamily: '"Space Mono", monospace',
      fontWeight: 700,
    },
    body1: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '0.875rem',
      lineHeight: 1.7,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#0f1115',
          color: '#f2f2f2',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#161822',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgba(110, 231, 183, 0.2)',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: 'rgba(110, 231, 183, 0.4)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontFamily: '"Space Mono", monospace',
          fontWeight: 400,
          borderRadius: '4px',
          padding: '8px 24px',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          '&:hover': {
            boxShadow: '0 0 20px rgba(110, 231, 183, 0.1)',
          },
        },
      },
    },
  },
});

export default theme;
