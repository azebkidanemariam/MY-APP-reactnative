import React, { useState, useEffect } from "react";

import { View, Text, Button, TextInput } from "react-native";

function MyComponent(props) {
  const propColor = props.color || "#2A251E";
  const [color, setColor] = useState("red");
  const [text, setText] = useState("");

  const pressHandler = () => {
    setColor(text);
  };

  useEffect(() => {
    console.log("Mounted");
  }, []);

  return (
    <View>
      <Text style={{ color: "#2A251E", fontSize: 30 }}>
        {JSON.stringify(props)}
      </Text>
      <Text style={{ color: propColor, fontSize: 30 }}>Magnanimous</Text>
      <Text style={{ color: color, fontSize: 30 }}>Dynamic text!</Text>
      <TextInput
        style={{ color: "white" }}
        value={text}
        onChangeText={(newText) => setText(newText)}
      />
      <Button title="click me" color="#2A251E" onPress={pressHandler} />
    </View>
  );
}
export default MyComponent;
