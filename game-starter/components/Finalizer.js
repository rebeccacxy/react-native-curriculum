import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Modal } from "react-native";

import ScoreChecker from "./ScoreChecker";

export default function Finalizer({
  setVisibility,
  finalVisibility,
  setFinalVisibility,
  setDisabled,
  winState,
  randomNo,
  userInput
}) {
  const [scoreCheckVisible, setScoreCheckVisible] = useState(false);

  const modalVisibility = () => {
    setFinalVisibility(false);
    setVisibility(false);
    setDisabled(true);
  };

  return (
    <View>
      <Modal visible={finalVisibility}>
        <View style={styles.container}>
          <Text style={styles.titleStyle}>
            {
              // configure WIN / LOST display
            }
          </Text>
          <View style={styles.buttonView}>
            <Button
            // configure CHECK SCORE button
            />
          </View>
          <View style={styles.buttonView}>
            <Button
            // configure BACK TO MAIN PAGE button
            />
          </View>
        </View>
      </Modal>
      {scoreCheckVisible && (
        <ScoreChecker
          scoreCheckVisible={scoreCheckVisible}
          setScoreCheckVisible={setScoreCheckVisible}
          setVisibility={setVisibility}
          setFinalVisibility={setFinalVisibility}
          setDisabled={setDisabled}
          userInput={userInput}
          randomNo={randomNo}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  titleStyle: {
    padding: 20,
    fontWeight: "bold",
    fontSize: 40,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
    marginVertical: 5
  },
  buttonView: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 2
  }
});
