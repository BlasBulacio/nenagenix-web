import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'auto' | 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Try to get the theme from localStorage
    if (typeof window !== 'undefined') {
      const savedTheme = window.localStorage.getItem('theme');
      if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark' || savedTheme === 'auto')) {
        return savedTheme;
      }
    }
    return 'auto';
  });

  useEffect(() => {
    // Remove any previous theme classes
    document.documentElement.classList.remove('theme-light', 'theme-dark');

    // Save theme preference
    localStorage.setItem('theme', theme);

    if (theme === 'auto') {
      // Remove manual theme classes when in auto mode
      return;
    }

    // Apply the selected theme
    document.documentElement.classList.add(`theme-${theme}`);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 