import { useContext } from 'react';
import {
  DarkModeContext,
  DarkModeContextType,
} from '../context/DarkModeContext';

export default function useTheme() {
  return useContext(DarkModeContext) as DarkModeContextType;
}
