import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

export default function MainScreen() {
  const [colorPhone, setColorPhone] = useState(
    require("../assets/vs_blue.png")
  );
  const navigation = useNavigation();
  const route = useRoute();
  useEffect(() => {
    if (route.params != null) setColorPhone(route.params.colorSelected);
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewImgProduct}>
        <Image source={colorPhone} style={styles.imgProduct} />
      </View>
      <Text style={{ fontSize: 16, marginLeft: 20 }}>
        Điện Thoại Vsmart Joy 3 - Hàng chính hãng
      </Text>
      <View style={styles.viewReview}>
        <View style={{ flexDirection: "row" }}>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </View>
        <View style={{ marginLeft: 20, marginTop: 5 }}>
          <Text style={{ fontSize: 16 }}>(Xem 828 đánh giá)</Text>
        </View>
      </View>
      <View style={styles.viewPrice}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>1.790.000 đ</Text>
        <Text
          style={{
            textDecorationLine: "line-through",
            color: "grey",
            fontSize: 15,
            fontWeight: "bold",
            marginLeft: 50,
          }}
        >
          1.790.000 đ
        </Text>
      </View>
      <View style={{ flexDirection: "row", marginLeft: 20 }}>
        <Text style={{ fontWeight: "bold", color: "red", fontSize: 17 }}>
          Ở ĐÂU RẺ HƠN HOÀN TIỀN
        </Text>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 100,
            height: 23,
            width: 23,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 10,
          }}
        >
          <Text style={{ fontSize: 15 }}>?</Text>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={styles.buttonColor}
          onPress={() => navigation.navigate("ChooseColor")}
        >
          <View style={{ marginRight: 80 }}>
            <Text style={{ fontSize: 18 }}>4 MÀU-CHỌN MÀU</Text>
          </View>
          <Text style={{ fontSize: 18 }}>{">"}</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={styles.buttonChoose}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
            CHỌN MUA
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const Star = () => {
  return (
    <View style={styles.items}>
      <Image source={require("../assets/star.png")} style={styles.star} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  viewImgProduct: {
    height: 320,
    alignItems: "center",
    marginTop: 10,
  },
  imgProduct: {
    height: 320,
    width: 260,
  },
  viewReview: {
    height: 50,
    marginLeft: 20,
    marginTop: 10,
    flexDirection: "row",
  },
  star: {
    height: 30,
    width: 30,
  },
  viewPrice: {
    flexDirection: "row",
    height: 50,
    marginLeft: 20,
  },
  buttonColor: {
    width: "90%",
    height: 45,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 20,
    justifyContent: "flex-end",
    marginTop: 20,
    flexDirection: "row",
    padding: 10,
  },
  buttonChoose: {
    width: "90%",
    height: 50,
    backgroundColor: "red",
    marginTop: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
