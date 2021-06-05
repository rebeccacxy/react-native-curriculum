import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello World!</Text>
      <Button
        title="Go to Counter Demo"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go to Square Demo"
        onPress={() => navigation.navigate("Square")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
