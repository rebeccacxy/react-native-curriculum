import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function AddTodo({ submitHandler }) {
  [text, setText] = useState("");

  const changeHandler = val => {
    setText(val);
  };

  const pressHandler = () => {
    submitHandler(text);
    setText("");
  };

  return (
    <View>
      <TextInput
      // code Enter todo button
      />
      <Button color="coral" onPress={pressHandler} title="Add todo" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    // insert code for styling
  }
});
