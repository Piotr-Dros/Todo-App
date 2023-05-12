import { PaletteMode, useMediaQuery } from '@mui/material';
import { ReactNode, createContext, useState } from 'react';

export type DarkModeContextType = {
  theme: PaletteMode;
  toggleDarkMode: () => void;
};

export const DarkModeContext = createContext<DarkModeContextType | null>(null);

export function DarkModeProvider({ children }: { children: ReactNode }) {
  const isDarkThemePreferred = useMediaQuery('(prefers-colo-scheme: dark)');

  const [theme, setTheme] = useState<PaletteMode>(
    !isDarkThemePreferred ? 'light' : 'dark'
  );

  const toggleDarkMode = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <DarkModeContext.Provider
      value={{ theme, toggleDarkMode }}
    ></DarkModeContext.Provider>
  );
}
