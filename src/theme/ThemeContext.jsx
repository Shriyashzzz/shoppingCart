import { createContext, useContext, useState } from "react";

// theme context is used to pass the vlaues to the children components
const ThemeContext = createContext(null);
//themeProvider hold the state and state change condition
//returns the the context with the current dark state Hook value
export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);
  const html = document.documentElement;
  const toggle = () => {
    const newTheme = dark ? "light" : "dark";
    //use local storage later for persistant theme state
    html.setAttribute("data-theme", newTheme);
    setDark(!dark);
  };
  // this is what makes Themeprovider an component, and also the point of entry
  //for values you want to pass as context to other components
  return (
    //go to the ThemeContext object and pass the value to the react elements
    <ThemeContext.Provider value={{ dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

//custom hook to reduce the number of imports in the app.jsx file
export const useTheme = () => useContext(ThemeContext);
