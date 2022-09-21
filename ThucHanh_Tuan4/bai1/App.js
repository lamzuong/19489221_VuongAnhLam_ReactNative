import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";

export default function App(props) {
  const [price, setPrice] = useState("141800");
  const [showTempPrice, setShowTempPrice] = useState("141.800 đ");
  const [showTotalPrice, setShowTotalPrice] = useState("141.800 đ");
  const [amount, setAmount] = useState("1");
  function plus() {
    var sl = Number.parseInt(amount) + 1;
    setAmount(sl + "");

    var giaGoc = Number.parseInt(price);
    var giaTam = giaGoc * sl;
    setShowTempPrice(
      giaTam.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + " đ"
    );
    var giaThat = giaGoc * sl;
    setShowTotalPrice(
      giaThat.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + " đ"
    );
  }
  function sub() {
    if (Number.parseInt(amount) == 1) {
      setAmount("1");
    } else {
      var sl = Number.parseInt(amount) - 1;
      setAmount(sl + "");

      var giaGoc = Number.parseInt(price);
      var giaTam = giaGoc * sl;
      setShowTempPrice(
        giaTam.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + " đ"
      );
      var giaThat = giaGoc * sl;
      setShowTotalPrice(
        giaThat.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + " đ"
      );
    }
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.viewProduct}>
          <View style={styles.viewProductDetail}>
            <View style={{ flexDirection: "column" }}>
              <Image
                style={styles.book}
                source={require("./assets/book.png")}
              />
              <Text style={styles.seeVoucher}>Mã giảm giá để lưu</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.nameProduct}>
                Nguyên hàm tích phân và ứng dụng
              </Text>
              <Text style={styles.nameProduct}>Cung cấp bởi Tiki Trading</Text>
              <Text style={styles.priceNow}>141.800 đ</Text>
              <Text style={styles.priceBefore}>141.800 đ</Text>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 20,
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity
                    style={[styles.button, { marginRight: 12 }]}
                    onPress={sub}
                  >
                    <Text style={{ fontWeight: "bold" }}>-</Text>
                  </TouchableOpacity>
                  <TextInput
                    style={styles.txtAmount}
                    editable={false}
                    value={amount}
                  ></TextInput>
                  <TouchableOpacity
                    style={[styles.button, { marginLeft: 12 }]}
                    onPress={plus}
                  >
                    <Text style={{ fontWeight: "bold" }}>+</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.buyLater}>Mua sau</Text>
              </View>
              <Text style={styles.linkHere}>Xem tại đây</Text>
            </View>
          </View>
          <View style={styles.voucher}>
            <TouchableOpacity style={styles.buttonVoucher}>
              <View style={styles.iconVoucher}></View>
              <Text style={styles.txtVoucher}>Mã giảm giá</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonApply}>
              <Text style={styles.txtApply}>Áp dụng</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.viewVoucher}>
          <Text style={{ fontWeight: "bold" }}>
            Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
          </Text>
          <Text style={styles.clickGift}>Nhập tại đây?</Text>
        </View>
        <View style={styles.viewCalcTemp}>
          <Text style={styles.labelCalcTemp}>Tạm tính</Text>
          <TextInput
            style={styles.txtPriceTemp}
            value={showTempPrice}
            editable={false}
          ></TextInput>
        </View>
      </ScrollView>
      <View style={styles.viewBottom}>
        <View style={styles.viewTotalPrice}>
          <Text style={styles.labelCalcTotal}>Thành tiền</Text>
          <TextInput
            style={styles.txtPriceTotal}
            value={showTotalPrice}
            editable={false}
          ></TextInput>
        </View>
        <View style={{ alignItems: "center", marginTop: 15 }}>
          <TouchableOpacity style={styles.buttonOrder}>
            <Text style={styles.txtOrder}>Tiến hành đặt hàng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(196,196,196)",
    marginTop: 15,
    justifyContent: "space-between",
  },
  viewProduct: {
    height: 340,
    backgroundColor: "white",
    flexDirection: "column",
  },
  viewProductDetail: {
    flexDirection: "row",
  },
  book: {
    margin: 13,
    height: 160,
    width: 120,
  },
  nameProduct: {
    fontWeight: "bold",
    marginTop: 10,
  },
  priceNow: {
    fontWeight: "bold",
    color: "red",
    fontSize: 18,
    marginTop: 12,
  },
  priceBefore: {
    fontWeight: "bold",
    textDecorationLine: "line-through",
    color: "grey",
    marginTop: 12,
  },
  button: {
    height: 20,
    width: 20,
    alignItems: "center",
    backgroundColor: "rgb(196,196,196)",
  },
  txtAmount: {
    fontWeight: "bold",
    fontSize: 15,
    color: "black",
    width: 20,
    lineHeight: 15,
    textAlign: "center",
  },
  buyLater: {
    color: "#134FEC",
    fontWeight: "bold",
    fontSize: 15,
  },
  seeVoucher: {
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 2,
  },
  linkHere: {
    color: "#134FEC",
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 12,
  },
  voucher: {
    flexDirection: "row",
    marginHorizontal: 15,
    marginTop: 45,
    justifyContent: "space-between",
  },
  buttonVoucher: {
    height: 50,
    width: 230,
    backgroundColor: "white",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "grey",
    flexDirection: "row",
  },
  iconVoucher: {
    height: 20,
    width: 40,
    backgroundColor: "#F2DD1B",
    marginLeft: 10,
    marginRight: 5,
  },
  txtVoucher: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5,
  },
  buttonApply: {
    height: 50,
    width: 130,
    backgroundColor: "#0A5EB7",
    alignItems: "center",
    justifyContent: "center",
  },
  txtApply: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  viewVoucher: {
    height: 60,
    marginTop: 20,
    backgroundColor: "white",
    flexDirection: "row",
    paddingTop: 15,
    paddingLeft: 15,
  },
  clickGift: {
    fontWeight: "bold",
    marginLeft: 10,
    color: "#134FEC",
  },
  viewCalcTemp: {
    height: 60,
    marginTop: 20,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  labelCalcTemp: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 15,
  },
  txtPriceTemp: {
    marginRight: 25,
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
  viewBottom: {
    height: 140,
    backgroundColor: "white",
  },
  viewTotalPrice: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  labelCalcTotal: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 15,
    color: "grey",
  },
  txtPriceTotal: {
    marginRight: 15,
    marginTop: 15,
    fontSize: 22,
    fontWeight: "bold",
    color: "red",
  },
  buttonOrder: {
    width: "90%",
    backgroundColor: "#E53935",
    alignItems: "center",
    padding: 15,
  },
  txtOrder: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
