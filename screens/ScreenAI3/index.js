import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

const ThreeDotsScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.dot} />
      <View style={styles.dot} />
      <View style={styles.dot} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f5f5f5"
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "green"
  }
});
export default ThreeDotsScreen;