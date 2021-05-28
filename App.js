// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import MyComponent from "./components/MyComponent";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import  MainStack  from "./navigators/stack";

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <MyComponent color="yellow" />
//       <MyComponent color="peachpuff" />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#8B008B",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
