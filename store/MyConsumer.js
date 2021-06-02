import { ThemeContext } from "./MyContext";
import React from "react";
import { useContext } from "react";
import AppTheme from "./Colors";
import { View,Button, SafeAreaView } from "react-native";

const ThemeSwitcher = (props) => {
  const { theme, switchTheme } = useContext(ThemeContext);

  const changeTheme = () =>
    theme == "dark" ? switchTheme("light") : switchTheme("dark");

  return (
      <SafeAreaView>

      <View>

          <Button title="Change" onPress={changeTheme} />
      </View>
      </SafeAreaView>

  )
};
export default ThemeSwitcher;
