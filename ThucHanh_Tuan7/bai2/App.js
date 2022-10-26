import { StatusBar } from "expo-status-bar";
import { useEffect, useRef } from "react";
import {
  Animated,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const ballAnimatedValue = useRef(new Animated.Value(0)).current;

  const moveBall = () => {
    Animated.timing(ballAnimatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const backBall = () => {
    Animated.timing(ballAnimatedValue, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const xVal = ballAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 350],
  });

  const yVal = ballAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 350],
  });

  const animStyle = {
    transform: [
      {
        translateX: xVal,
        // translateY: yVal,
      },
    ],
  };
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.ball, animStyle]}>
        <Text style={styles.text}>+</Text>
      </Animated.View>
      <TouchableOpacity
        onPress={moveBall}
        style={{ alignItems: "center", marginTop: 20 }}
      >
        <View style={{ backgroundColor: "blue", width: 100 }}>
          <Text style={styles.text}>Move</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={backBall}
        style={{ alignItems: "center", marginTop: 20 }}
      >
        <View style={{ backgroundColor: "blue", width: 100 }}>
          <Text style={styles.text}>Back</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  ball: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 32,
    textAlign: "center",
  },
});
