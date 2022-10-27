import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

export default function App() {
  const splashscreen = useRef(new Animated.Value(0)).current;
  const txtWelcome = useRef(new Animated.Value(0)).current;
  const txtTacgia = useRef(new Animated.Value(0)).current;
  const [hideScreen, setHideScreen] = useState(false);
  const [hideTextWelcome, setHideTextWelcome] = useState(false);
  const [hideTextTacGia, setHideTextTacGia] = useState(true);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(splashscreen, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(splashscreen, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(txtWelcome, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(txtWelcome, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(txtTacgia, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
    setTimeout(() => {
      setHideTextWelcome(false);
      setHideScreen(true);
    }, 2100);
    setTimeout(() => {
      setHideTextWelcome(true);
      setHideTextTacGia(false);
    }, 4200);
  }, []);
  return (
    <Animated.View style={styles.container}>
      {hideScreen ? null : (
        <Animated.Image
          style={[{ width: 400, height: 400 }, { opacity: splashscreen }]}
          source={require("./assets/Zola.png")}
        />
      )}
      {hideTextWelcome ? null : (
        <Animated.View style={{ opacity: txtWelcome }}>
          <Text style={{ fontSize: 20 }}>Welcome to Splash Screen</Text>
        </Animated.View>
      )}
      {hideTextTacGia ? null : (
        <Animated.View style={{ opacity: txtTacgia }}>
          <Text style={{ fontSize: 20 }}>Author: Vương Ánh Lâm</Text>
        </Animated.View>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
