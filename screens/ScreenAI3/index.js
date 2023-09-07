import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, Image, TextInput, TouchableOpacity, CheckBox } from "react-native";

const LoginScreen = () => {
  const [isSelected, setSelection] = useState(false);
  return <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
        <View style={styles.checkboxContainer}>
          <CheckBox value={isSelected} onValueChange={setSelection} style={styles.checkbox} />
          <Text style={styles.label}>Save Password</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center"
  },
  logoContainer: {
    marginBottom: 50
  },
  logo: {
    width: 100,
    height: 100
  },
  inputContainer: {
    width: "80%",
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  buttonContainer: {
    width: "80%",
    height: 40,
    backgroundColor: "#007BFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  buttonText: {
    color: "#fff",
    fontSize: 16
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20
  },
  checkbox: {
    alignSelf: "center"
  },
  label: {
    margin: 8
  }
});
export default LoginScreen;