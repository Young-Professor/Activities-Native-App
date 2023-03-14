import { StyleSheet, Text, View } from "react-native";
import react from "react";

import React from "react";

export default function Header() {
  return (
    <View style={styles.Header}>
      <Text style={styles.Text}>Todo's App</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  Header: {
    height:70,
    backgroundColor: "#030B39",
  },
  Text: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop:25,
    fontSize:20
  },
});
