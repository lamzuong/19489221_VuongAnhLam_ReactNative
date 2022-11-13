import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Image
        source={{
          uri: "https://res.cloudinary.com/dicpaduof/image/upload/v1667973760/Onboarding_b2mewq.png",
        }}
        style={{ width: "100%", height: "60%" }}
      />
      <Text style={{ color: "white", textAlign: "center", fontSize: 30 }}>
        Coffee so good,{"\n"}your taste buds{"\n"}will love it.
      </Text>
      <Text style={{ color: "grey", textAlign: "center", fontSize: 15 }}>
        The best grain, the finest roast, the{"\n"}powerfull flavor.
      </Text>
      <TouchableOpacity
        style={styles.btnStart}
        onPress={() => {
          navigation.navigate("Product");
        }}
      >
        <Text style={styles.txtStart}>Get started</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  btnStart: {
    backgroundColor: "rgb(198,124,78)",
    marginHorizontal: 50,
    marginTop: 30,
    alignItems: "center",
    borderRadius: 10,
  },
  txtStart: {
    color: "white",
    fontSize: 18,
    padding: 10,
    fontWeight: "bold",
  },
});
