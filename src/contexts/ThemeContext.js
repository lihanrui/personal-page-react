import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { Storage } from '../lib/util';
import { Color } from '../lib/style';

const Context = createContext();

export const useThemeContext = () => useContext(Context);

const getPreferColor = () => {
  try {
    const stored = Storage.get('theme');
    
    if (stored && (stored === 'light' || stored === 'dark')) {
      return stored;
    }
    
    // Default to dark theme to show our custom colors
    Storage.set('theme', 'dark');
    return 'dark';
  } catch (error) {
    console.warn('Failed to get theme preference, defaulting to dark:', error);
    return 'dark';
  }
};

export default function ThemeContext({ children }) {
  const [theme, setTheme] = useState(getPreferColor());

  const isLight = useMemo(() => theme === 'light', [theme]);

  const colors = useMemo(() => Color[theme], [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      Storage.set('theme', newTheme);
      return newTheme;
    });
  }, []);

  return <Context.Provider value={{ colors, theme, isLight, toggleTheme }}>{children}</Context.Provider>;
}
