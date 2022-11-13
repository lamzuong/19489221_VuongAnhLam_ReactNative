import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  Alert,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import colors from "./color";
import { TextInput } from "react-native-paper";
import { ListOrderContext } from "./Home";
import { useIsFocused } from "@react-navigation/native";

export default function Cart({ navigation }) {
  const [tabChoose, setTabChoose] = useState(true);
  const [listRender, setListRender] = useState([]);
  const [rerender, setRerender] = useState(false);
  var { listOrder } = useContext(ListOrderContext);
  const isFocused = useIsFocused();
  useEffect(() => {
    setListRender(listOrder);
    var priceNow = 0;
    listOrder.forEach((e) => {
      priceNow += e.amount * e.price;
    });
    setPrice(priceNow.toFixed(2));
    var totalPriceNow = (priceNow + 1).toFixed(2);
    setTotalPrice(totalPriceNow + "");
  }, [isFocused, rerender]);
  function add(index) {
    var amount = Number.parseInt(listRender[index].amount) + 1;
    listOrder[index].amount = amount + "";
    setRerender(!rerender);
  }
  function sub(index) {
    var amountNow = Number.parseInt(listRender[index].amount);
    if (amountNow == 1) {
      Alert.alert("Warning", "Do you want to delete it?", [
        {
          text: "No",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            listOrder.splice(index, 1);
            setRerender(!rerender);
          },
        },
      ]);
    } else {
      var amount = Number.parseInt(listRender[index].amount) - 1;
      listOrder[index].amount = amount + "";
      setRerender(!rerender);
    }
  }
  const [price, setPrice] = useState("4.53");
  const [fee, setFee] = useState("1.0");
  const [feeOri, setFeeOri] = useState("2.0");
  const [totalPrice, setTotalPrice] = useState("5.53");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="chevron-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>Order</Text>
        <View style={{ width: 14 }}></View>
      </View>
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.halfTop}>
          <View style={styles.viewTab}>
            <TouchableOpacity
              style={tabChoose ? styles.tabChoose : styles.tabNoChoose}
              onPress={() => {
                setTabChoose(true);
              }}
            >
              <Text style={tabChoose ? styles.txtChoose : null}>Deliver</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={!tabChoose ? styles.tabChoose : styles.tabNoChoose}
              onPress={() => {
                setTabChoose(false);
              }}
            >
              <Text style={!tabChoose ? styles.txtChoose : null}>Pick Up</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.info}>
            <Text
              style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10 }}
            >
              Delivery Address
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 15, marginBottom: 8 }}>
              JI. Kpg Sutoyo
            </Text>
            <Text style={{ fontSize: 12, color: "grey", marginBottom: 10 }}>
              Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.
            </Text>
            <View style={{ flexDirection: "row", marginBottom: 20 }}>
              <TouchableOpacity style={styles.btnSmall}>
                <SimpleLineIcons
                  name="note"
                  size={15}
                  color={colors.lightDark}
                />
                <Text style={styles.txtSmall}>Edit Address</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnSmall}>
                <MaterialCommunityIcons
                  name="note-text-outline"
                  size={18}
                  color={colors.lightDark}
                />
                <Text style={styles.txtSmall}>Add Note</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            {listRender.map((item, index) => (
              <View style={styles.items} key={index}>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={{ uri: item.img }}
                    style={{ width: 50, height: 50, borderRadius: 10 }}
                  />
                  <View style={{ marginLeft: 15 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                      {item.name}
                    </Text>
                    <Text style={{ color: "grey", fontSize: 13 }}>
                      {item.sub}
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TouchableOpacity
                    style={styles.btnAddSub}
                    onPress={() => {
                      sub(index);
                    }}
                  >
                    <Text style={styles.txtAddSub}>-</Text>
                  </TouchableOpacity>
                  <TextInput
                    value={item.amount}
                    style={styles.amount}
                    editable={false}
                    underlineColor="white"
                  />
                  <TouchableOpacity
                    style={styles.btnAddSub}
                    onPress={() => {
                      add(index);
                    }}
                  >
                    <Text style={styles.txtAddSub}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.halfBot}>
          <TouchableOpacity style={styles.discount}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons
                name="sale"
                size={24}
                color={colors.lightBrown}
              />
              <Text
                style={{ fontWeight: "bold", marginLeft: 10, fontSize: 16 }}
              >
                1 Discount is applied
              </Text>
            </View>
            <MaterialIcons name="navigate-next" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ fontWeight: "bold", marginVertical: 15 }}>
            Payment Summary
          </Text>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: colors.lightDarkGrey,
            }}
          >
            <View style={styles.summary}>
              <Text>Price</Text>
              <Text style={styles.txtPrice}>$ {price}</Text>
            </View>
            <View style={styles.summary}>
              <Text>Delivery Fee</Text>
              <View style={styles.summary}>
                <Text style={styles.txtDiscount}>$ {feeOri}</Text>
                <Text style={styles.txtPrice}>$ {fee}</Text>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <View style={styles.summary}>
              <Text>Total Payment</Text>
              <Text style={styles.txtPrice}>$ {totalPrice}</Text>
            </View>
            <View style={styles.summary}>
              <View style={[styles.summary, { marginTop: -8 }]}>
                <MaterialCommunityIcons
                  name="cash-multiple"
                  size={30}
                  color={colors.lightBrown}
                />
                <View style={[styles.summary, styles.viewCash]}>
                  <View
                    style={[
                      styles.cashLeft,
                      { backgroundColor: colors.lightBrown },
                    ]}
                  >
                    <Text style={{ color: "white" }}>Cash</Text>
                  </View>
                  <View style={styles.cashLeft}>
                    <Text>$ {totalPrice}</Text>
                  </View>
                </View>
              </View>
              <SimpleLineIcons
                name="options"
                size={15}
                color="white"
                style={styles.iconOpt}
              />
            </View>
            <TouchableOpacity style={styles.btnOrder}>
              <Text style={styles.txtOrder}>Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  halfTop: {
    backgroundColor: "white",
    paddingHorizontal: 30,
  },
  halfBot: {
    backgroundColor: "white",
    marginTop: 5,
    paddingHorizontal: 30,
  },
  header: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingHorizontal: 30,
  },
  viewTab: {
    flexDirection: "row",
    backgroundColor: colors.lightDarkGrey,
    borderRadius: 10,
  },
  tabChoose: {
    width: "50%",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.lightBrown,
  },
  txtChoose: {
    color: "white",
    fontWeight: "bold",
  },
  tabNoChoose: {
    width: "50%",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
  info: {
    marginTop: 15,
    borderBottomColor: colors.lightGrey35,
    borderBottomWidth: 1,
  },
  btnSmall: {
    padding: 5,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.lightGrey35,
    borderRadius: 20,
    marginRight: 10,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  txtSmall: {
    color: colors.lightDark,
    marginLeft: 6,
  },
  items: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-between",
  },
  amount: {
    width: 40,
    height: 20,
    textAlign: "center",
    justifyContent: "center",
    fontSize: 12,
    fontWeight: "bold",
    backgroundColor: "white",
  },
  btnAddSub: {
    borderRadius: 100,
    width: 28,
    height: 28,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.lightGrey35,
  },
  txtAddSub: {
    textAlign: "center",
    marginTop: -7,
    fontSize: 15,
    fontWeight: "bold",
    color: "grey",
    padding: 8,
  },
  discount: {
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.lightDarkGrey,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  txtDiscount: {
    marginRight: 10,
    textDecorationLine: "line-through",
    fontSize: 16,
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  txtPrice: {
    fontWeight: "bold",
    fontSize: 16,
    height: 30,
    justifyContent: "flex-end",
  },
  viewCash: {
    backgroundColor: colors.lightDarkGrey,
    borderRadius: 15,
    marginLeft: 10,
  },
  cashLeft: {
    padding: 5,
    paddingHorizontal: 8,
    borderRadius: 15,
  },
  iconOpt: {
    backgroundColor: colors.lightDark,
    borderRadius: 100,
    width: 25,
    height: 25,
    padding: 5,
  },
  btnOrder: {
    width: "100%",
    padding: 20,
    backgroundColor: colors.lightBrown,
    borderRadius: 20,
    alignItems: "center",
  },
  txtOrder: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
