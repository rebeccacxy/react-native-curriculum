import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default class CounterScreen extends React.component {
  state = {
    counter: 0,
  };

  Increase = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  };

  Decrease = () => {
     this.setState({
      counter: this.state.counter - 1
  };

  render() {
    return (
      <View>
        <Button
          title="Increase"
          onPress={() => {this.Increase}}
        />
        <Button
          title="Decrease"
          onPress={() => {this.Decrease});
          }
        />
        <Text>Current Count: {this.state.counter}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default CounterScreen;
