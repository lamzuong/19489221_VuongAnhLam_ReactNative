import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import flatListData from "./flatListData";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back-outline"
          size={35}
          color="white"
          style={{ marginLeft: 20 }}
        />
        <Text style={{ fontSize: 20, color: "white" }}>Chat</Text>
        <MaterialCommunityIcons
          name="cart-check"
          size={30}
          color="white"
          style={{ marginRight: 20 }}
        />
      </View>
      <View style={{ marginHorizontal: 30, marginTop: 15 }}>
        <Text style={{ fontSize: 15 }}>
          Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chát với shop!
        </Text>
      </View>
      <FlatList
        style={{ marginTop: 10 }}
        data={flatListData}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity style={styles.item}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ marginRight: 20 }}>
                  <Image source={{ uri: item.img }} style={styles.image} />
                </View>
                <View>
                  <Text>{item.name}</Text>
                  <Text style={{ color: "grey" }}>
                    Shop <Text style={{ color: "black" }}> {item.shop}</Text>
                  </Text>
                </View>
              </View>

              <TouchableOpacity style={styles.btnChat}>
                <Text style={styles.txtChat}>Chat</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}
const Item = ({ item }) => {
  return (
    <View>
      <Text>{item.name}</Text>
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
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "rgb(196,196,196)",
  },
  image: {
    height: 80,
    width: 80,
  },
  btnChat: {
    justifyContent: "center",
    marginRight: 20,
    width: 100,
  },
  txtChat: {
    color: "white",
    backgroundColor: "red",
    padding: 10,
    textAlign: "center",
    height: 45,
    fontSize: 18,
  },
});
