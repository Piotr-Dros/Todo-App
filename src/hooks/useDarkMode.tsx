import { useContext } from 'react';
import {
  DarkModeContext,
  DarkModeContextType,
} from '../context/DarkModeContext';

export default function useDarkMode() {
  return useContext(DarkModeContext) as DarkModeContextType;
}
