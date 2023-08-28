// ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const preferredColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const [theme, setTheme] = useState(localStorage.getItem('theme') || preferredColorScheme);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        try {
            localStorage.setItem('theme', theme);
        } catch (error) {
            console.error('Error al guardar el tema en localStorage:', error);
        }
    }, [theme]);

    const toggleTheme = () => {
        const switchToTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(switchToTheme);
    };

    const contextValue = {
        theme,
        toggleTheme
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeProvider, ThemeContext };