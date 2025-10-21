import React, { createContext, useState } from 'react';

// Create a context for the theme
export const ThemeContext = createContext();

// Create a provider for the theme context
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle the theme
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Define the theme styles based on the selected mode
  const theme = {
    backgroundColor: isDarkMode ? '#000' : '#fff',
    textColor: isDarkMode ? '#fff' : '#000',
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
