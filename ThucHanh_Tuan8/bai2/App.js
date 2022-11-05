import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { Animated, Dimensions, StyleSheet, Text, View } from "react-native";
import { Button, Image } from "react-native";
import icon from "./assets/mouse.png";

export default function App() {
  const maxX = 200;
  const minX = 0;
  const maxY = 250;
  const minY = 0;
  // console.log(Math.floor(Math.random() * (maxX - minX + 1) + minX));

  const [location, setLocation] = useState({
    marginLeft: new Animated.Value(
      Math.floor(Math.random() * (maxX - minX + 1) + minX)
    ),
    marginTop: new Animated.Value(
      Math.floor(Math.random() * (maxY - minY + 1) + minY)
    ),
  });
  const [location2, setLocation2] = useState({
    marginLeft: new Animated.Value(
      Math.floor(Math.random() * (maxX - minX + 1) + minX)
    ),
    marginTop: new Animated.Value(
      Math.floor(Math.random() * (maxY - minY + 1) + minY)
    ),
  });
  const [location3, setLocation3] = useState({
    marginLeft: new Animated.Value(
      Math.floor(Math.random() * (maxX - minX + 1) + minX)
    ),
    marginTop: new Animated.Value(
      Math.floor(Math.random() * (maxY - minY + 1) + minY)
    ),
  });
  function onPress(evt) {
    var x = evt.nativeEvent.locationX;
    var y = evt.nativeEvent.locationY;
    setLocation({
      marginLeft: Math.floor(Math.random() * (maxX - minX + 1) + minX),
      marginTop: Math.floor(Math.random() * (maxY - minY + 1) + minY),
    });
    setLocation2({
      marginLeft: Math.floor(Math.random() * (maxX - minX + 1) + minX),
      marginTop: Math.floor(Math.random() * (maxY - minY + 1) + minY),
    });
    setLocation3({
      marginLeft: Math.floor(Math.random() * (maxX - minX + 1) + minX),
      marginTop: Math.floor(Math.random() * (maxY - minY + 1) + minY),
    });
  }
  function onMove(evt) {
    console.log("====================================");
    //setLocation({marginLeft: x, marginTop: y })
  }
  function onRelease() {
    console.log("Realse!");
  }
  return (
    <View style={styles.container}>
      <Animated.Image
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderGrant={onPress}
        onResponderMove={onMove}
        onResponderRelease={onRelease}
        source={icon}
        style={{
          marginLeft: location.marginLeft,
          marginTop: location.marginTop,
        }}
      ></Animated.Image>
      <Animated.Image
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderGrant={onPress}
        onResponderMove={onMove}
        onResponderRelease={onRelease}
        source={icon}
        style={{
          marginLeft: location2.marginLeft,
          marginTop: location2.marginTop,
        }}
      ></Animated.Image>

      <Animated.Image
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderGrant={onPress}
        onResponderMove={onMove}
        onResponderRelease={onRelease}
        source={icon}
        style={{
          marginLeft: location3.marginLeft,
          marginTop: location3.marginTop,
        }}
      ></Animated.Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
