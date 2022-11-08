import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

// Determine the states of this components
const initialState = {
    cart: false,
    chat: false,
    notification: false,
    userProfile: false,
  
};

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);
    
    // Setting current theme mode for every visit saves to localStorage
    const setMode = (e)=>{
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
        setThemeSettings(false);
    }
    // Setting the color mode for every visit saves to localStorage
    const setColor = (color)=>{
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
        setThemeSettings(false);
    }

    const handleClick = (clicked) => {
         setIsClicked({ ...initialState, [clicked]: true });
    }
    const handleClose = (clicked)=> {
        setIsClicked({ ...initialState, [clicked]: false });
    }
    return (
        <StateContext.Provider
            value={{
                activeMenu, setActiveMenu,
                isClicked, setIsClicked, handleClick,
                screenSize, setScreenSize,
                setColor, setCurrentColor,
                setMode, setCurrentMode,
                themeSettings, setThemeSettings,
                currentColor, currentMode,
                handleClose
                
            }}
        >
            { children }
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext (StateContext);

