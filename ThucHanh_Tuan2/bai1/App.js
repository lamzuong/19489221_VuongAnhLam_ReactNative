import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [a, setA] = useState("");
  function callFunction() {
    Alert.alert("", "" + a);
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Input text"
        onChangeText={(a) => setA(a)}
      ></TextInput>
      <Button title="Show" onPress={callFunction}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 100,
    borderWidth: 2,
    paddingLeft: 10,
    marginBottom: 10,
  },
});
