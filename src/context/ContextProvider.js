import React, { createContext, useContext, useState } from "react";

const StateContext = createContext(); // create Context

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

// create Context Provider
export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);

  const [isClicked, setIsClicked] = useState(initialState);

  const [screenSize, setScreenSize] = useState(undefined); // the screen size value

  // THEME states and setters
  const [currentColor, setCurrentColor] = useState(
    localStorage.getItem("colorMode")
      ? localStorage.getItem("colorMode")
      : "#03C9D7"
  );
  const [currentMode, setCurrentMode] = useState(
    localStorage.getItem("themeMode")
      ? localStorage.getItem("themeMode")
      : "Light"
  );
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (e) => {
    setCurrentMode(e.target.value); //  Theme settings panel Mode 'input' value

    localStorage.setItem("themeMode", e.target.value);
  };
  const setColor = (color) => {
    console.log(color);
    setCurrentColor(color); //  Theme settings panel Color'input' value
    setThemeSettings(false); // close Theme Settings after theme Color have been chosen
    localStorage.setItem("colorMode", color);
  };

  // to set the clicked NavBar menu element
  const handleClick = (clickedEl) => {
    // pass the 'string' as an argument
    setIsClicked({ ...initialState, [clickedEl]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        setColor,
        setMode,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

// export StateContext to use with other components as 'useStateContext'
export const useStateContext = () => useContext(StateContext);
