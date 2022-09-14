import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TextInput } from "@react-native-material/core";

export default function App() {
  return (
    <View>
      <LinearGradient
        colors={["rgba(199, 244, 247, 0)", "#D1F4F6", "#E5F4F5", "#00CCF9"]}
        style={styles.bgcolor}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text variant="h2" style={[styles.title, { marginTop: 113 }]}>
          CODE
        </Text>
        <Text variant="h5" style={[styles.title, { marginTop: 62 }]}>
          VERIFICATION
        </Text>
        <Text variant="h6" style={[styles.title, { marginTop: 22 }]}>
          Enter ontime password sent on {"\n"} ++849092605798
        </Text>
        <View style={styles.codeVerify}>
          <View style={styles.rectangle}></View>
          <View style={styles.rectangle}></View>
          <View style={styles.rectangle}></View>
          <View style={styles.rectangle}></View>
          <View style={styles.rectangle}></View>
          <View style={styles.rectangle}></View>
        </View>
        <TouchableOpacity style={styles.buttonSign}>
          <Text style={styles.textButton}>VERIFY CODE</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  bgcolor: {
    width: "100%",
    height: "100%",
  },
  title: {
    height: 70,
    fontWeight: "bold",
    fontFamily: "Roboto",
    textAlign: "center",
  },
  codeVerify: {
    flexDirection: "row",
    marginTop: 14,
    justifyContent: "center",
  },
  rectangle: {
    borderWidth: 1,
    height: 50,
    width: 50,
  },
  buttonSign: {
    marginTop: 34,
    width: "90%",
    backgroundColor: "#E3C000",
    color: "black",
    alignItems: "center",
    padding: 15,
    marginLeft: "5%",
  },
  textButton: {
    fontSize: 22,
    fontWeight: "700",
  },
});
