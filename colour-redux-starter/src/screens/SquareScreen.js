import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;
// colourtochange --> type property

const reducer = (state, action) => {
  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : {
            ...state,
            red: state.red + action.payload
          };
    case "change_green":
      // repeat for green
    case "change_blue":
      // repeat for blue

    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_red", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
         // repeat for blue
        }
        onDecrease={() =>
          // repeat for blue
        }
        color="Blue"
      />
      <ColorCounter
        onIncrease={() =>
          // repeat for green
        }
        onDecrease={() =>
          // repeat for green
        }
        color="Green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
