import React, { useState } from "react";
const MyContext = React.createContext();
const MyContextProvider = (props) => {
  const [theme, setTheme] = useState("dark");
  const switchTheme = (newTheme) => {
    // Validation logic for changing state
    setTheme(newTheme);
  };
  return (
    <MyContext.Provider value={{ theme, switchTheme }}>
      {props.children}
    </MyContext.Provider>
  );
};
// We need to export both the context and the provider
export { MyContextProvider, MyContext };
