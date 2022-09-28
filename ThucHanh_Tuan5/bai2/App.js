import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import { Rating } from "react-native-ratings";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import flatListData from "./flatListData";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back-outline"
          size={35}
          color="white"
          style={{ marginLeft: 20 }}
        />
        <View>
          <SearchBar />
        </View>
        <View style={{ flexDirection: "row", marginRight: 20 }}>
          <MaterialCommunityIcons name="cart-check" size={30} color="white" />
          <SimpleLineIcons
            name="options"
            size={24}
            color="white"
            style={{ marginLeft: 20 }}
          />
        </View>
      </View>
      <FlatList
        style={{ marginTop: 10 }}
        data={flatListData}
        renderItem={({ item, index }) => {
          return (
            <Item
              name={item.name}
              star={item.star}
              img={item.img}
              price={item.price}
              discount={item.discount}
              buy={item.buy}
            />
          );
        }}
        keyExtractor={(item, index) => index}
        numColumns={2}
      />
      <StatusBar animated={true} backgroundColor="#61dafb" hidden={true} />
    </View>
  );
}
const Item = ({ name, star, img, price, discount, buy }) => {
  return (
    <View style={styles.item}>
      <Image source={{ uri: img }} style={styles.image} />
      <Text>{name}</Text>
      <View style={{ flexDirection: "row" }}>
        <Rating
          type="custom"
          imageSize={20}
          ratingCount={5}
          startingValue={star}
          tintColor="rgb(229,229,229)"
          ratingBackgroundColor="rgb(200,200,200)"
        />
        <Text style={{ fontSize: 12, marginLeft: 10 }}>{buy}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{price}</Text>
        <Text style={{ fontSize: 15, marginLeft: 10, color: "grey" }}>
          {discount}
        </Text>
      </View>
    </View>
  );
};
const SearchBar = () => {
  return (
    <View style={styles.searchWrapper}>
      <FontAwesome name="search" size={24} color="black" />
      <TextInput
        style={{ fontSize: 15, marginLeft: 12, width: 160 }}
        placeholder="Dây cáp USB"
      ></TextInput>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(229,229,229)",
    marginTop: StatusBar.currentHeight,
  },
  header: {
    height: 60,
    backgroundColor: "rgb(27,169,255)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  item: {
    width: Dimensions.get("window").width / 2 - 20,
    padding: 10,
    marginLeft: 10,
  },

  image: {
    height: 100,
    width: Dimensions.get("window").width / 2 - 20,
  },
  searchWrapper: {
    flexDirection: "row",
    backgroundColor: "white",
    width: 220,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
