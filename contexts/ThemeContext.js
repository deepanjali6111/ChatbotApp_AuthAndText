// contexts/ThemeContext.js
import React, { createContext, useState, useContext } from 'react';
import colors from '../themes/colors';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const theme = {
        colors: isDarkMode ? colors.dark : colors.light,
        isDarkMode,
        toggleTheme: () => setIsDarkMode(!isDarkMode),
    };

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);