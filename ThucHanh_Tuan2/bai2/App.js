import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [k, setKQ] = useState("");
  function calculate() {
    var kq = Number.parseInt(a) + Number.parseInt(b);
    setKQ(kq + "");
  }
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>Nhập a: </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(a) => setA(a)}
        ></TextInput>
      </View>
      <View style={styles.row}>
        <Text>Nhập b: </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(b) => setB(b)}
        ></TextInput>
      </View>
      <View style={[styles.row, { marginBottom: 10 }]}>
        <Text>Kết quả: </Text>
        <TextInput
          editable={false}
          value={k}
          style={{
            width: 100,
            borderWidth: 2,
            backgroundColor: "yellow",
            color: "red",
            paddingLeft: 10,
          }}
        ></TextInput>
      </View>
      <Button title="Calculate" onPress={calculate}></Button>
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
    marginBottom: 10,
    paddingLeft: 10,
  },
  row: {
    flexDirection: "row",
  },
});
