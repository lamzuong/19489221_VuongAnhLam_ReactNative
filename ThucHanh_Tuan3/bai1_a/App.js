import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";
import { Button } from "@react-native-material/core";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <View>
      <LinearGradient
        colors={["#C4C4C4", "#28F7AC"]}
        style={styles.bgcolor}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.alignCenter}>
          <Image
            source={require("./assets/circle.png")}
            style={styles.circleImg}
          />
          <Text style={styles.title}>GROW{"\n"} YOUR BUSINESS</Text>
          <Text style={styles.content}>
            We will help you to grow your business using online server
          </Text>
          <Text style={styles.endText}>HOW WE WORK?</Text>
        </View>
        <View style={styles.fixToText}>
          <TouchableOpacity style={styles.buttonSign}>
            <Text style={styles.textButton}>LOG IN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSign}>
            <Text style={styles.textButton}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  bgcolor: {
    width: "100%",
    height: "100%",
  },
  alignCenter: {
    alignItems: "center",
  },
  circleImg: {
    marginTop: 69,
    width: 142,
    height: 142,
    resizeMode: "stretch",
  },
  title: {
    position: "absolute",
    width: 289,
    height: 58,
    marginTop: 277,
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Roboto",
    fontStyle: "normal",
    lineHeight: 29,
    textAlign: "center",
  },
  content: {
    position: "absolute",
    width: 302,
    height: 36,
    top: 385,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 18,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 260,
  },
  buttonSign: {
    backgroundColor: "#E3C000",
    color: "black",
    height: 45,
    width: 125,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    fontSize: 18,
    fontWeight: "700",
  },
  endText: {
    position: "absolute",
    width: 289,
    height: 58,
    marginTop: 537,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Roboto",
    fontStyle: "normal",
    lineHeight: 29,
    textAlign: "center",
  },
});
