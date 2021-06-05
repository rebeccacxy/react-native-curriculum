import React, { Component, useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default function Counter() {
  let [count, setCount] = useState(0);
  let [delay, setDelay] = useState(1000);

  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>{count}</Text>
      <Text style={styles.text2}>{count}</Text>
      <Text style={styles.text3}>{count}</Text>
      <Text style={styles.text4}>{count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    color: "lightblue",
    fontSize: 16,
  },
  text2: {
    color: "skyblue",
    fontSize: 32,
  },
  text3: {
    color: "steelblue",
    fontSize: 80,
  },
  text4: {
    color: "darkblue",
    fontSize: 140,
  },
});
