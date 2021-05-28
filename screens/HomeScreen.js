import { SafeAreaView, View, Text, Button } from "react-native";
import React from "react";

const HomeScreen = (props) => {
  const pressHandler = () =>{
    props.navigation.navigate('About')
  }
  return (
    <SafeAreaView>
      <Text> HomeScreen!</Text>
      <Button onPress={pressHandler} title='Go to About'/>
    </SafeAreaView>

  );
};
export default HomeScreen;
