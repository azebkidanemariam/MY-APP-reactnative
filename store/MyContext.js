import React, { useState } from "react";
import {AppTheme} from './Colors'
const ThemeContext = React.createContext();

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState('dark');

  const switchTheme = newTheme => {
    setTheme (newTheme)
  }
 
 
  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      <ThemeContext.Consumer>
      {props.children}

      </ThemeContext.Consumer>
    </ThemeContext.Provider>
  );
};
// We need to export both the context and the provider
export {  ThemeContextProvider,ThemeContext };
