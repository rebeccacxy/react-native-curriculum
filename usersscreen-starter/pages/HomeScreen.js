import React from "react";
import { View } from "react-native";
import Mybutton from "./components/Mybutton";
import Mytext from "./components/Mytext";
import { openDatabase } from "react-native-sqlite-storage";
var db = openDatabase({ name: "UserDatabase.db" });
export default class HomeScreen extends React.Component {

  // insert code here

    db.transaction(function(txn) {

  // insert sql stuff here

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          flexDirection: "column"
        }}
      >
        <Mytext text="SQLite Example" />
        <Mybutton
          title="Register"
          customClick={() => this.props.navigation.navigate("Register")}
        />
        <Mybutton
          title="Update"
          customClick={() => this.props.navigation.navigate("Update")}
        />
        <Mybutton
          title="View"
          customClick={() => this.props.navigation.navigate("View")}
        />
        <Mybutton
          title="View All"
          customClick={() => this.props.navigation.navigate("ViewAll")}
        />
        <Mybutton
          title="Delete"
          customClick={() => this.props.navigation.navigate("Delete")}
        />
      </View>
    );
  }
}
