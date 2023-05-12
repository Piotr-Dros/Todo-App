import { PaletteMode, createTheme } from '@mui/material';

const getTheme = (mode: PaletteMode) =>
  createTheme({
    typography: {},
    palette: {
      ...(mode === 'light' ? {} : {}),
    },
  });

function App() {
  return <div>App</div>;
}

export default App;
