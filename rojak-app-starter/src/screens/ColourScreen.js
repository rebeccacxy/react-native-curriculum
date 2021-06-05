import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";

const ColourScreen = () => {
  const [colors, setColors] = useState([]);
  console.log(colors);
  return (
    <View>
      <Button

      //insert button functionality here
      />
      <FlatList
      // insert FlatList code here
      />
    </View>
  );
};

const randomRgb = () => {
  // insert code here
};

const styles = StyleSheet.create({});

export default ColourScreen;
