import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Button,
  Alert,
  Pressable,
} from "react-native";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        style={styles.modalWindow}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>This is modal</Text>
          <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.modalCloseText}>
              Hide Modal by pressing here...
            </Text>
          </Pressable>
        </View>
      </Modal>

      <Pressable onPress={() => setModalVisible(true)}>
        <Text style={styles.pressableText}>Show modal message</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  pressableText: {
    color: "green",
    fontWeight: "bold",
    fontSize: 24,
  },
  modalWindow: {
    margin: 20,
    marginTop: 80,
    marginBottom: 80,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    fontSize: 20,
    margin: 10,
  },
  modalCloseText: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 14,
  },
});
