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
    const [activeMenu, setActiveMenu] = useState(true)

    const [isClicked, setIsClicked] = useState(initialState)

    const handleClick = (clickedEl) => {    // pass the 'string' as an argument
      setIsClicked({ ...initialState, [clickedEl]:true})
    };

    const [screenSize, setScreenSize] = useState(undefined)  // the screen size value

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
        }}
    >
      {children}
    </StateContext.Provider>
  );
};

// export StateContext to use with other components as 'useStateContext'
export const useStateContext = () => useContext(StateContext) 
