import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import {
  Ionicons,
  AntDesign,
  FontAwesome,
  Entypo,
  FontAwesome5,
} from "@expo/vector-icons";
import colors from "./screenBottom/color";
import ReadMore from "react-native-read-more-text";

export default function ProductDetail({ route, navigation }) {
  const { product } = route.params;
  const [sizeChoose, setSizeChoose] = useState("M");
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
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>Details</Text>
        <AntDesign name="hearto" size={24} color="black" />
      </View>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Image source={{ uri: product.img }} style={styles.imgProduct} />
        </View>
        <View style={styles.center}>
          <View>
            <Text style={styles.nameProduct}>{product.name}</Text>
            <Text style={styles.subProduct}>{product.sub}</Text>
            <View style={styles.review}>
              <FontAwesome name="star" size={18} color="yellow" />
              <Text style={styles.starProduct}>{product.star}</Text>
              <Text style={styles.reviewsProduct}>({product.reviews})</Text>
            </View>
          </View>
          <View style={styles.viewBtnInfo}>
            <TouchableOpacity style={styles.btnInfo}>
              <FontAwesome5
                name="pagelines"
                size={24}
                color={colors.lightBrown}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnInfo}>
              <Entypo name="battery" size={24} color={colors.lightBrown} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.description}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Description</Text>
          <View>
            <ReadMore
              numberOfLines={3}
              renderTruncatedFooter={renderTruncatedFooter}
              renderRevealedFooter={renderRevealedFooter}
              // onReady={handleTextReady}
            >
              <Text style={{ marginTop: 10, color: "grey" }}>
                {product.description}
              </Text>
            </ReadMore>
          </View>
        </View>
        <View style={styles.size}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Size</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={sizeChoose == "S" ? styles.btnSizeChoose : styles.btnSize}
              onPress={() => {
                setSizeChoose("S");
              }}
            >
              <Text style={sizeChoose == "S" ? styles.txtSizeChoose : null}>
                S
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={sizeChoose == "M" ? styles.btnSizeChoose : styles.btnSize}
              onPress={() => {
                setSizeChoose("M");
              }}
            >
              <Text style={sizeChoose == "M" ? styles.txtSizeChoose : null}>
                M
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={sizeChoose == "L" ? styles.btnSizeChoose : styles.btnSize}
              onPress={() => {
                setSizeChoose("L");
              }}
            >
              <Text style={sizeChoose == "L" ? styles.txtSizeChoose : null}>
                L
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View>
          <Text style={{ color: "grey" }}>Price</Text>
          <Text style={styles.txtPrice}>$ {product.price}</Text>
        </View>
        <TouchableOpacity style={styles.btnBuy}>
          <Text style={styles.txtBuy}>Buy now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const renderTruncatedFooter = (handlePress) => {
  return (
    <Text
      style={{ color: colors.lightBrown, fontWeight: "bold" }}
      onPress={handlePress}
    >
      Read more
    </Text>
  );
};
const renderRevealedFooter = (handlePress) => {
  return (
    <Text
      style={{ color: colors.lightBrown, fontWeight: "bold" }}
      onPress={handlePress}
    >
      Show less
    </Text>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  center: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    marginHorizontal: 30,
    paddingBottom: 20,
    borderBottomColor: colors.lightDarkGrey,
  },
  footer: {
    marginHorizontal: 30,
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imgProduct: {
    width: "85%",
    height: 180,
    borderRadius: 20,
    resizeMode: "contain",
  },
  nameProduct: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
  },
  subProduct: {
    color: "grey",
    marginTop: 5,
  },
  starProduct: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 3,
  },
  reviewsProduct: {
    color: "grey",
    fontSize: 12,
  },
  review: {
    flexDirection: "row",
    marginTop: 12,
    alignItems: "baseline",
  },
  viewBtnInfo: {
    flexDirection: "row",
    marginTop: 50,
  },
  btnInfo: {
    backgroundColor: colors.lightGrey,
    height: 40,
    width: 40,
    marginRight: 5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  description: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  size: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  btnSize: {
    paddingHorizontal: 40,
    paddingVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.lightDarkGrey,
    marginRight: 10,
  },
  btnSizeChoose: {
    paddingHorizontal: 40,
    paddingVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.lightBrown,
    marginRight: 10,
    backgroundColor: "blanchedalmond",
  },
  txtSizeChoose: {
    color: colors.lightBrown,
  },
  txtPrice: {
    color: colors.lightBrown,
    fontSize: 18,
    fontWeight: "bold",
  },
  btnBuy: {
    paddingHorizontal: 70,
    paddingVertical: 10,
    backgroundColor: colors.lightBrown,
    borderRadius: 15,
  },
  txtBuy: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
