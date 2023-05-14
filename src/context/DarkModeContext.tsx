import { ReactNode, createContext, useState } from 'react';

type ThemeMode = 'light' | 'dark';

export type DarkModeContextType = {
  theme: ThemeMode;
  toggleDarkMode: () => void;
};

export const DarkModeContext = createContext<DarkModeContextType | null>(null);

export function DarkModeProvider({ children }: { children: ReactNode }) {
  const systemPreferences: ThemeMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches
    ? 'dark'
    : 'light';

  const [theme, setTheme] = useState<ThemeMode>(systemPreferences);

  const toggleDarkMode = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <DarkModeContext.Provider value={{ theme, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
