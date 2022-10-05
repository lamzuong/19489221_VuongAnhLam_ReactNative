import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const [taskValue, setTaskValue] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.formAdd}>
        <TextInput
          placeholder="Nhập task cần thêm"
          style={styles.inputTask}
          onChangeText={(taskValue) => setTaskValue(taskValue)}
          value={taskValue}
        />
        <Button
          title="Thêm mới"
          onPress={() => {
            setTaskList([...taskList, taskValue]);
            setTaskValue("");
          }}
        />
      </View>
      <FlatList
        style={{ marginTop: 10 }}
        data={taskList}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.itemTask}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.txtNumber}>{index + 1} </Text>
                <Text style={{ fontSize: 18 }}>{item}</Text>
              </View>
              <TouchableOpacity
                style={styles.btnDelete}
                onPress={() => {
                  const taskListTemp = [...taskList];
                  taskListTemp.splice(index, 1);
                  setTaskList(taskListTemp);
                }}
              >
                <Text style={{ color: "yellow", padding: 10 }}>Xóa</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 20,
  },
  formAdd: {
    height: 120,
    borderBottomWidth: 1,
    padding: 10,
  },
  inputTask: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  itemTask: {
    borderWidth: 1,
    borderRadius: 20,
    margin: 5,
    marginHorizontal: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  txtNumber: {
    fontSize: 18,
    marginRight: 10,
    color: "red",
    fontWeight: "bold",
  },
  btnDelete: {
    backgroundColor: "red",
  },
});
