import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MyComponent from "./components/MyComponent";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./navigators/stack";
import { ThemeContext,ThemeContextProvider } from "./store/MyContext";

const App = () => {
  return (
    <ThemeContext.Provider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </ThemeContext.Provider>
  );
};

export default App;
