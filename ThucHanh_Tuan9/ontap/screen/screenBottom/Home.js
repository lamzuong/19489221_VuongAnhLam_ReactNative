import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
  ToastAndroid,
} from "react-native";
import React, { createContext, useEffect, useState } from "react";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
const axios = require("axios").default;

const title = ["Cappuccino", "Machiato", "Latte", "Americano"];
export var ListOrderContext = createContext();
export default function Home({ navigation }) {
  const [titleChoose, setTitleChoose] = useState(title[0]);
  const [listOrder, setListOrder] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://6369c30015219b84961e1e52.mockapi.io/api/data")
      .then((todo) => setData(todo.data));
  }, []);
  ListOrderContext = createContext({ listOrder: listOrder });
  function addList(item) {
    var duplicate = false;
    listOrder.forEach((e) => {
      if (e.id == item.id) {
        ToastAndroid.show("Product already in cart!", ToastAndroid.SHORT);
        duplicate = true;
      }
    });
    if (duplicate == false) {
      var obj = item;
      obj["amount"] = "1";
      setListOrder([...listOrder, obj]);
      ToastAndroid.show("Added product success!", ToastAndroid.SHORT);
    }
  }
  return (
    <View style={styles.container}>
      <ListOrderContext.Provider
        value={{ listOrder: listOrder }}
      ></ListOrderContext.Provider>
      <View style={{ backgroundColor: "rgb(20,10,18)", height: "40%" }}>
        <View style={styles.info}>
          <View>
            <Text style={{ color: "grey" }}>Location</Text>
            <Text style={{ color: "white" }}>Bilzen, Tanjungbalai</Text>
          </View>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrsnCuJgCnGJFr75tIpzG-_Ir9N5kbCrLEBg&usqp=CAU",
            }}
            style={{ width: 40, height: 40, borderRadius: 10 }}
          />
        </View>
        <View style={styles.search}>
          <View style={{ flexDirection: "row" }}>
            <Feather name="search" size={24} color="white" />
            <TextInput
              placeholder="Search coffee"
              placeholderTextColor="grey"
              style={{ paddingHorizontal: 10 }}
            />
          </View>
          <Ionicons
            name="ios-options-outline"
            size={24}
            color="white"
            style={{
              backgroundColor: "rgb(198,124,78)",
              padding: 5,
              borderRadius: 10,
            }}
          />
        </View>
      </View>
      <Image
        source={{
          uri: "https://res.cloudinary.com/dicpaduof/image/upload/v1667978462/Screenshot_2022-11-09_142041_rcwfog.jpg",
        }}
        style={styles.imgCenter}
      />
      <ScrollView
        horizontal
        style={{ height: 120, marginTop: 90, flexGrow: 1 }}
        showsHorizontalScrollIndicator={false}
      >
        {title.map((e, i) => (
          <TouchableOpacity
            style={
              titleChoose == e ? styles.itemTitle : styles.itemTitleNoChoose
            }
            onPress={() => {
              setTitleChoose(e);
            }}
            key={i + "@#"}
          >
            <Text
              style={
                titleChoose == e ? styles.txtTitle : styles.txtTitleNoChoose
              }
            >
              {e}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <FlatList
        style={{ marginLeft: 10 }}
        data={data}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={styles.itemCoffee}
              onPress={() => {
                navigation.navigate("ProductDetail", {
                  product: item,
                });
              }}
            >
              <Image
                source={{ uri: item.img }}
                style={{ height: 150, width: "100%", borderRadius: 20 }}
              />
              <View style={{ position: "absolute", left: 10, top: 10 }}>
                <View style={{ flexDirection: "row" }}>
                  <FontAwesome name="star" size={14} color="yellow" />
                  <Text style={styles.txtStar}>{item.star}</Text>
                </View>
              </View>

              <Text style={styles.txtItemName}>{item.name}</Text>
              <Text style={styles.txtItemSub}>{item.sub}</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.txtItemPrice}>$ {item.price}</Text>
                <TouchableOpacity
                  style={styles.btnAdd}
                  onPress={() => {
                    addList(item);
                  }}
                >
                  <Text style={{ color: "white", fontSize: 25 }}>+</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
        numColumns={2}
        keyExtractor={(item, index) => index}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(245,245,245)",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 10,
  },
  search: {
    flexDirection: "row",
    backgroundColor: "rgb(20,20,24)",
    marginHorizontal: 20,
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  imgCenter: {
    height: 130,
    width: 300,
    position: "absolute",
    left: 30,
    top: 150,
    borderRadius: 10,
    resizeMode: "contain",
  },
  itemTitle: {
    padding: 10,
    backgroundColor: "rgb(198,124,78)",
    width: 100,
    height: 40,
    marginHorizontal: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  itemTitleNoChoose: {
    padding: 10,
    backgroundColor: "white",
    width: 100,
    height: 40,
    marginHorizontal: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  txtTitle: {
    color: "white",
    fontWeight: "bold",
  },
  txtTitleNoChoose: {
    color: "grey",
    fontWeight: "bold",
  },
  itemCoffee: {
    height: 250,
    width: 150,
    borderRadius: 20,
    margin: 10,
    backgroundColor: "white",
  },
  txtItemName: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 10,
  },
  txtItemSub: {
    color: "grey",
    marginLeft: 10,
  },
  txtItemPrice: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 10,
  },
  btnAdd: {
    backgroundColor: "rgb(198,124,78)",
    borderRadius: 10,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  txtStar: {
    color: "white",
    fontSize: 14,
    marginLeft: 5,
    fontWeight: "bold",
    marginTop: -5,
  },
});
