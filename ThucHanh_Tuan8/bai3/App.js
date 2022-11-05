import { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Alert,
} from "react-native";
import { Button, Image } from "react-native";
import mouse from "./assets/mouse.png";
import mouse1 from "./assets/mouse1.png";
import mouse2 from "./assets/mouse2.png";
import mouse3 from "./assets/mouse3.png";
import cat from "./assets/cat.png";

export default function App() {
  const maxX = Dimensions.get("window").width - 100;
  const minX = 0;
  const maxY = Dimensions.get("window").height - 200;
  const minY = 0;

  const [attemp, setAttemp] = useState(Math.floor(Math.random() * 7 + 1));
  const clickCount = useRef(0);
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
  const [locationCat, setLocationCat] = useState({
    marginLeft: new Animated.Value(
      Math.floor(Math.random() * (maxX - minX + 1) + minX)
    ),
    marginTop: new Animated.Value(
      Math.floor(Math.random() * (maxY - minY + 1) + minY)
    ),
  });
  function onPress1(evt) {
    clickCount.current = clickCount.current + 1;
    if (clickCount.current == attemp) {
      setLocationCat({
        marginLeft: location.marginLeft,
        marginTop: location.marginTop,
      });
      Alert.alert("Chúc mừng bạn", "Thành công", [
        {},
        {
          text: "OK",
          onPress: () => {
            (clickCount.current = 0),
              setAttemp(Math.floor(Math.random() * 7 + 1));
            setLocation({
              marginLeft: new Animated.Value(
                Math.floor(Math.random() * (maxX - minX + 1) + minX)
              ),
              marginTop: new Animated.Value(
                Math.floor(Math.random() * (maxY - minY + 1) + minY) + 100
              ),
            });
            setLocation2({
              marginLeft: new Animated.Value(
                Math.floor(Math.random() * (maxX - minX + 1) + minX)
              ),
              marginTop: new Animated.Value(
                Math.floor(Math.random() * (maxY - minY + 1) + minY) + 100
              ),
            });
            setLocation3({
              marginLeft: new Animated.Value(
                Math.floor(Math.random() * (maxX - minX + 1) + minX)
              ),
              marginTop: new Animated.Value(
                Math.floor(Math.random() * (maxY - minY + 1) + minY) + 100
              ),
            });
          },
        },
      ]);
    } else {
      var x1 = Math.floor(Math.random() * (maxX - minX + 1) + minX);
      var y1 = Math.floor(Math.random() * (maxY - minY + 1) + minY);
      var x2 = Math.floor(Math.random() * (maxX - minX + 1) + minX);
      var y2 = Math.floor(Math.random() * (maxY - minY + 1) + minY);
      var x3 = Math.floor(Math.random() * (maxX - minX + 1) + minX);
      var y3 = Math.floor(Math.random() * (maxY - minY + 1) + minY);
      while (
        (x1 > evt.nativeEvent.locationX - 30 &&
          x1 < evt.nativeEvent.locationX + 30) ||
        (y1 > evt.nativeEvent.locationY - 30 &&
          y1 < evt.nativeEvent.locationY + 30)
      ) {
        x1 = Math.floor(Math.random() * (maxX - minX + 1) + minX);
        y1 = Math.floor(Math.random() * (maxY - minY + 1) + minY);
      }
      while (
        (x2 > evt.nativeEvent.locationX - 30 &&
          x2 < evt.nativeEvent.locationX + 30) ||
        (y2 > evt.nativeEvent.locationY - 30 &&
          y2 < evt.nativeEvent.locationY + 30) ||
        (x2 > x1 - 10 && x2 < x1 + 50) ||
        (y2 > y1 - 10 && y2 < y1 + 30)
      ) {
        x2 = Math.floor(Math.random() * (maxX - minX + 1) + minX);
        y2 = Math.floor(Math.random() * (maxY - minY + 1) + minY);
      }
      while (
        (x3 > evt.nativeEvent.locationX - 30 &&
          x3 < evt.nativeEvent.locationX + 30) ||
        (y3 > evt.nativeEvent.locationY - 30 &&
          y3 < evt.nativeEvent.locationY + 30) ||
        (x3 > x1 - 10 && x3 < x1 + 50) ||
        (y3 > y1 - 10 && y3 < y1 + 30) ||
        (x3 > x2 - 10 && x3 < x2 + 50) ||
        (y3 > y2 - 10 && y3 < y2 + 30)
      ) {
        x3 = Math.floor(Math.random() * (maxX - minX + 1) + minX);
        y3 = Math.floor(Math.random() * (maxY - minY + 1) + minY);
      }
      setLocation({
        marginLeft: x1,
        marginTop: y1 + 100,
      });
      setLocation2({
        marginLeft: x2,
        marginTop: y2 + 100,
      });
      setLocation3({
        marginLeft: x3,
        marginTop: y3 + 100,
      });
    }
  }
  function onPress2(evt) {
    clickCount.current = clickCount.current + 1;
    if (clickCount.current == attemp) {
      setLocationCat({
        marginLeft: location2.marginLeft,
        marginTop: location2.marginTop,
      });
      Alert.alert("Chúc mừng bạn", "Thành công", [
        {},
        {
          text: "OK",
          onPress: () => {
            (clickCount.current = 0),
              setAttemp(Math.floor(Math.random() * 7 + 1));
            setLocation({
              marginLeft: new Animated.Value(
                Math.floor(Math.random() * (maxX - minX + 1) + minX)
              ),
              marginTop: new Animated.Value(
                Math.floor(Math.random() * (maxY - minY + 1) + minY) + 100
              ),
            });
            setLocation2({
              marginLeft: new Animated.Value(
                Math.floor(Math.random() * (maxX - minX + 1) + minX)
              ),
              marginTop: new Animated.Value(
                Math.floor(Math.random() * (maxY - minY + 1) + minY) + 100
              ),
            });
            setLocation3({
              marginLeft: new Animated.Value(
                Math.floor(Math.random() * (maxX - minX + 1) + minX)
              ),
              marginTop: new Animated.Value(
                Math.floor(Math.random() * (maxY - minY + 1) + minY) + 100
              ),
            });
          },
        },
      ]);
    } else {
      var x1 = Math.floor(Math.random() * (maxX - minX + 1) + minX);
      var y1 = Math.floor(Math.random() * (maxY - minY + 1) + minY);
      var x2 = Math.floor(Math.random() * (maxX - minX + 1) + minX);
      var y2 = Math.floor(Math.random() * (maxY - minY + 1) + minY);
      var x3 = Math.floor(Math.random() * (maxX - minX + 1) + minX);
      var y3 = Math.floor(Math.random() * (maxY - minY + 1) + minY);
      while (
        (x1 > evt.nativeEvent.locationX - 30 &&
          x1 < evt.nativeEvent.locationX + 30) ||
        (y1 > evt.nativeEvent.locationY - 30 &&
          y1 < evt.nativeEvent.locationY + 30)
      ) {
        x1 = Math.floor(Math.random() * (maxX - minX + 1) + minX);
        y1 = Math.floor(Math.random() * (maxY - minY + 1) + minY);
      }
      while (
        (x2 > evt.nativeEvent.locationX - 30 &&
          x2 < evt.nativeEvent.locationX + 30) ||
        (y2 > evt.nativeEvent.locationY - 30 &&
          y2 < evt.nativeEvent.locationY + 30) ||
        (x2 > x1 - 10 && x2 < x1 + 50) ||
        (y2 > y1 - 10 && y2 < y1 + 30)
      ) {
        x2 = Math.floor(Math.random() * (maxX - minX + 1) + minX);
        y2 = Math.floor(Math.random() * (maxY - minY + 1) + minY);
      }
      while (
        (x3 > evt.nativeEvent.locationX - 30 &&
          x3 < evt.nativeEvent.locationX + 30) ||
        (y3 > evt.nativeEvent.locationY - 30 &&
          y3 < evt.nativeEvent.locationY + 30) ||
        (x3 > x1 - 10 && x3 < x1 + 50) ||
        (y3 > y1 - 10 && y3 < y1 + 30) ||
        (x3 > x2 - 10 && x3 < x2 + 50) ||
        (y3 > y2 - 10 && y3 < y2 + 30)
      ) {
        x3 = Math.floor(Math.random() * (maxX - minX + 1) + minX);
        y3 = Math.floor(Math.random() * (maxY - minY + 1) + minY);
      }
      setLocation({
        marginLeft: x1,
        marginTop: y1 + 100,
      });
      setLocation2({
        marginLeft: x2,
        marginTop: y2 + 100,
      });
      setLocation3({
        marginLeft: x3,
        marginTop: y3 + 100,
      });
    }
  }
  function onPress3(evt) {
    clickCount.current = clickCount.current + 1;
    if (clickCount.current == attemp) {
      setLocationCat({
        marginLeft: location3.marginLeft,
        marginTop: location3.marginTop,
      });
      Alert.alert("Chúc mừng bạn", "Thành công", [
        {},
        {
          text: "OK",
          onPress: () => {
            (clickCount.current = 0),
              setAttemp(Math.floor(Math.random() * 7 + 1));
            setLocation({
              marginLeft: new Animated.Value(
                Math.floor(Math.random() * (maxX - minX + 1) + minX)
              ),
              marginTop: new Animated.Value(
                Math.floor(Math.random() * (maxY - minY + 1) + minY) + 100
              ),
            });
            setLocation2({
              marginLeft: new Animated.Value(
                Math.floor(Math.random() * (maxX - minX + 1) + minX)
              ),
              marginTop: new Animated.Value(
                Math.floor(Math.random() * (maxY - minY + 1) + minY) + 100
              ),
            });
            setLocation3({
              marginLeft: new Animated.Value(
                Math.floor(Math.random() * (maxX - minX + 1) + minX)
              ),
              marginTop: new Animated.Value(
                Math.floor(Math.random() * (maxY - minY + 1) + minY) + 100
              ),
            });
          },
        },
      ]);
    } else {
      var x1 = Math.floor(Math.random() * (maxX - minX + 1) + minX);
      var y1 = Math.floor(Math.random() * (maxY - minY + 1) + minY);
      var x2 = Math.floor(Math.random() * (maxX - minX + 1) + minX);
      var y2 = Math.floor(Math.random() * (maxY - minY + 1) + minY);
      var x3 = Math.floor(Math.random() * (maxX - minX + 1) + minX);
      var y3 = Math.floor(Math.random() * (maxY - minY + 1) + minY);
      while (
        (x1 > evt.nativeEvent.locationX - 30 &&
          x1 < evt.nativeEvent.locationX + 30) ||
        (y1 > evt.nativeEvent.locationY - 30 &&
          y1 < evt.nativeEvent.locationY + 30)
      ) {
        x1 = Math.floor(Math.random() * (maxX - minX + 1) + minX);
        y1 = Math.floor(Math.random() * (maxY - minY + 1) + minY);
      }
      while (
        (x2 > evt.nativeEvent.locationX - 30 &&
          x2 < evt.nativeEvent.locationX + 30) ||
        (y2 > evt.nativeEvent.locationY - 30 &&
          y2 < evt.nativeEvent.locationY + 30) ||
        (x2 > x1 - 10 && x2 < x1 + 50) ||
        (y2 > y1 - 10 && y2 < y1 + 30)
      ) {
        x2 = Math.floor(Math.random() * (maxX - minX + 1) + minX);
        y2 = Math.floor(Math.random() * (maxY - minY + 1) + minY);
      }
      while (
        (x3 > evt.nativeEvent.locationX - 30 &&
          x3 < evt.nativeEvent.locationX + 30) ||
        (y3 > evt.nativeEvent.locationY - 30 &&
          y3 < evt.nativeEvent.locationY + 30) ||
        (x3 > x1 - 10 && x3 < x1 + 50) ||
        (y3 > y1 - 10 && y3 < y1 + 30) ||
        (x3 > x2 - 10 && x3 < x2 + 50) ||
        (y3 > y2 - 10 && y3 < y2 + 30)
      ) {
        x3 = Math.floor(Math.random() * (maxX - minX + 1) + minX);
        y3 = Math.floor(Math.random() * (maxY - minY + 1) + minY);
      }
      setLocation({
        marginLeft: x1,
        marginTop: y1 + 100,
      });
      setLocation2({
        marginLeft: x2,
        marginTop: y2 + 100,
      });
      setLocation3({
        marginLeft: x3,
        marginTop: y3 + 100,
      });
    }
  }
  function onPressCat(evt) {
    if (clickCount.current < attemp) {
      var x = evt.nativeEvent.locationX;
      var y = evt.nativeEvent.locationY;
      setLocationCat({
        marginLeft: x - 25,
        marginTop: y - 25,
      });
    }
  }
  function onMove(evt) {
    console.log("====================================");
    //setLocation({marginLeft: x, marginTop: y })
  }
  function onRelease() {
    // console.log("Realse!");
  }
  return (
    <View
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      onResponderGrant={onPressCat}
      style={styles.container}
    >
      <StatusBar />
      <Text style={{ fontSize: 25, textAlign: "center", marginTop: 30 }}>
        Số lần cần bắt chuột: {attemp}
      </Text>
      <Text style={{ fontSize: 25, textAlign: "center", marginTop: 30 }}>
        Số lần đã bắt chuột: {clickCount.current}
      </Text>
      <Animated.Image
        source={cat}
        style={{
          marginLeft: locationCat.marginLeft,
          marginTop: locationCat.marginTop,
          position: "absolute",
        }}
      />
      <Animated.Image
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderGrant={onPress1}
        onResponderRelease={onPressCat}
        source={mouse1}
        style={{
          marginLeft: location.marginLeft,
          marginTop: location.marginTop,
          position: "absolute",
        }}
      ></Animated.Image>
      <Animated.Image
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderGrant={onPress2}
        onResponderRelease={onPressCat}
        source={mouse2}
        style={{
          marginLeft: location2.marginLeft,
          marginTop: location2.marginTop,
          position: "absolute",
        }}
      ></Animated.Image>
      <Animated.Image
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderGrant={onPress3}
        onResponderRelease={onPressCat}
        source={mouse3}
        style={{
          marginLeft: location3.marginLeft,
          marginTop: location3.marginTop,
          position: "absolute",
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
