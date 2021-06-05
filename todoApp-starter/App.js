import React, { useState } from "react";
import { StyleSheet, View, FlatList, Alert } from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" }
    // create two more starter todo items
  ]);

  const pressHandler = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = text => {
    if (text.length > 3) {
      // if length of text input > 3, add a todo,
    } else {
      // else send an alert to the user to say 'Oops! Todo must be at least 3 characters'
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
          // configure FlatList here
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    padding: 35
  },
  list: {
    marginTop: 20,
    flexDirection: "row"
  }
});
