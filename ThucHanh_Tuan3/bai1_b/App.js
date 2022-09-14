import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Fontisto } from "@expo/vector-icons";

export default function App() {
  return (
    <View>
      <LinearGradient
        colors={["rgba(189, 246, 198, 0)", "#BDF6C6"]}
        style={styles.bgcolor}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.alignCenter}>
          <Image source={require("./assets/lock.png")} style={styles.lockImg} />
          <Text style={styles.title}>FORGET{"\n"} PASSWORD</Text>
          <Text style={styles.content}>
            Provide your account’s email for which you want to reset your
            password
          </Text>
          <View style={styles.mail}>
            <Fontisto
              name="email"
              size={24}
              color="black"
              style={styles.iconMail}
            />
            <TextInput
              placeholder="Email"
              placeholderTextColor="#000"
            ></TextInput>
          </View>

          <TouchableOpacity style={styles.buttonSign}>
            <Text style={styles.textButton}>NEXT</Text>
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
  lockImg: {
    marginTop: 100,
    width: 110,
    height: 130,
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
  mail: {
    flexDirection: "row",
    backgroundColor: "#C4C4C4",
    position: "absolute",
    top: 460,
    width: 305,
    height: 45,
  },
  iconMail: {
    padding: 10,
  },
  txtEmail: {
    paddingLeft: 20,
  },
  buttonSign: {
    backgroundColor: "#E3C000",
    color: "black",
    position: "absolute",
    width: 305,
    height: 45,
    top: 550,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontSize: 18,
    fontWeight: "700",
  },
});
