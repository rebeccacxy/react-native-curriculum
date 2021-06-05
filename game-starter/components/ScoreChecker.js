import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Modal, FlatList } from "react-native";
import { openDatabase } from "expo-sqlite";

import ScoreViewer from "./ScoreViewer";

const db = openDatabase("db");

const scoreSchema = {
  id: "ID",
  guess: "GUESS",
  actual: "ACTUAL",
  state: "STATE"
};

export default function ScoreChecker({
  setFinalVisibility,
  setVisibility,
  scoreCheckVisible,
  setScoreCheckVisible,
  setDisabled,
  randomNo,
  userInput
}) {
  const [scores, setScores] = useState([]);
  const addScoreToDb = () => {
    const state = randomNo === userInput;

    // code SQL stuff here
  };

  const modalVisibility = () => {
    setFinalVisibility(false);
    setVisibility(false);
    setScoreCheckVisible(false);
    setDisabled(true);
  };

  useEffect(() => {
    addScoreToDb();
  }, [userInput, randomNo]);

  return (
    <Modal visible={scoreCheckVisible}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>SCORE CHECKER</Text>
        <Button
          color="green"
          title="Back to Main Page"
          onPress={modalVisibility}
        />
      </View>
      <View style={styles.container}>
        <ScoreViewer item={scoreSchema} />
      </View>
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item, index) => item.id.toString()}
          data={scores}
          renderItem={dataItem => <ScoreViewer item={dataItem.item} />}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 3
  },
  titleStyle: {
    fontWeight: "bold",
    padding: 10,
    fontSize: 20,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
    marginVertical: 7
  }
});
