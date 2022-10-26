import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
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
  const [hideBall, setHideBall] = useState(false);
  const [hideBall2, setHideBall2] = useState(true);
  const [hideBall3, setHideBall3] = useState(true);
  const ballAnimatedValue = useRef(new Animated.Value(0)).current;
  const ballAnimatedValue2 = useRef(new Animated.Value(1)).current;
  const ballAnimatedValue3 = useRef(new Animated.Value(2)).current;
  const handlePress = () => {
    Animated.sequence([
      Animated.timing(ballAnimatedValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.delay(500),
      Animated.timing(ballAnimatedValue2, {
        toValue: 2,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.delay(500),
      Animated.timing(ballAnimatedValue3, {
        toValue: 3,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
    setTimeout(() => {
      setHideBall(true);
      setHideBall2(false);
    }, 1000);
    setTimeout(() => {
      setHideBall2(true);
      setHideBall3(false);
    }, 3000);
  };
  const xVal = ballAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
  });
  const animStyle = {
    transform: [{ translateX: xVal }],
  };
  const xVal2 = ballAnimatedValue2.interpolate({
    inputRange: [1, 2],
    outputRange: [100, 200],
  });
  const animStyle2 = {
    transform: [{ translateX: xVal2 }],
  };
  const xVal3 = ballAnimatedValue3.interpolate({
    inputRange: [2, 3],
    outputRange: [200, 300],
  });
  const animStyle3 = {
    transform: [{ translateX: xVal3 }],
  };
  return (
    <View style={styles.container}>
      {hideBall ? null : (
        <Animated.View
          style={[styles.ball, { backgroundColor: "red" }, animStyle]}
        >
          <Text style={styles.text}>a</Text>
        </Animated.View>
      )}
      {hideBall2 ? null : (
        <Animated.View
          style={[styles.ball, { backgroundColor: "blue" }, animStyle2]}
        >
          <Text style={styles.text}>b</Text>
        </Animated.View>
      )}
      {hideBall3 ? null : (
        <Animated.View
          style={[styles.ball, { backgroundColor: "yellow" }, animStyle3]}
        >
          <Text style={styles.text}>c</Text>
        </Animated.View>
      )}
      <TouchableOpacity
        onPress={() => {
          handlePress();
        }}
        style={{ alignItems: "center", marginTop: 20 }}
      >
        <View style={{ backgroundColor: "blue", width: 100 }}>
          <Text style={styles.text}>Move</Text>
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
