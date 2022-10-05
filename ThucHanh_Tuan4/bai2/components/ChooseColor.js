import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function ChooseColor() {
  const navigation = useNavigation();
  const obj = [
    {
      color: "Bạc",
      provider: "Tiki Trading",
      price: "1.790.000 đ",
      colorShow: require("../assets/vs_silver.png"),
    },
    {
      color: "Đỏ",
      provider: "Tiki Trading",
      price: "1.790.000 đ",
      colorShow: require("../assets/vs_red.png"),
    },
    {
      color: "Đen",
      provider: "Tiki Trading",
      price: "1.790.000 đ",
      colorShow: require("../assets/vs_black.png"),
    },
    {
      color: "Xanh",
      provider: "Tiki Trading",
      price: "1.790.000 đ",
      colorShow: require("../assets/vs_blue.png"),
    },
  ];
  const [selectColor, setSelectedColor] = useState(obj[3].color);
  const [selectProvider, setSelectedProvider] = useState(obj[3].provider);
  const [selectPrice, setSelectedPrice] = useState(obj[3].price);
  const [selectColorShow, setSelectedColorShow] = useState(obj[3].colorShow);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.viewHeader}>
          <Image source={selectColorShow} style={styles.imgProduct} />
          <View style={{ marginTop: 10, marginLeft: 10 }}>
            <Text>Điện Thoại Vsmart Joy 3</Text>
            <Text>Hàng chính hãng</Text>
            <Text style={{ marginTop: 10 }}>
              Màu: <Text style={{ fontWeight: "bold" }}>{selectColor}</Text>
            </Text>
            <Text style={{ marginTop: 10 }}>
              Cung cấp bởi{" "}
              <Text style={{ fontWeight: "bold" }}>{selectProvider}</Text>
            </Text>
            <Text style={{ fontWeight: "bold", marginTop: 10 }}>
              {selectPrice}
            </Text>
          </View>
        </View>
        <View style={styles.viewFooter}>
          <TouchableOpacity
            onPress={() => {
              setAll(0);
            }}
          >
            <View style={[styles.color, { backgroundColor: "#C5F1FB" }]}></View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setAll(1);
            }}
          >
            <View style={[styles.color, { backgroundColor: "red" }]}></View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setAll(2);
            }}
          >
            <View style={[styles.color, { backgroundColor: "black" }]}></View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setAll(3);
            }}
          >
            <View style={[styles.color, { backgroundColor: "blue" }]}></View>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={styles.buttonChoose}
            onPress={() =>
              navigation.navigate("MainScreen", {
                colorSelected: selectColorShow,
              })
            }
          >
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
              XONG
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
  function setAll(index) {
    setSelectedColor(obj[index].color);
    setSelectedProvider(obj[index].provider);
    setSelectedPrice(obj[index].price);
    setSelectedColorShow(obj[index].colorShow);
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewHeader: {
    backgroundColor: "#fff",
    height: 210,
    paddingTop: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  imgProduct: {
    height: 175,
    width: 150,
  },
  viewFooter: {
    height: 480,
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 10,
  },
  color: {
    height: 100,
    width: 100,
  },
  buttonChoose: {
    width: "90%",
    height: 50,
    backgroundColor: "#1952E2",
    marginVertical: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "red",
  },
});
