import React, { useContext } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import axios from "axios";

import AsyncStorage from "@react-native-community/async-storage";

import styles from "./style";

const UploadData = (props) => {
  const { navigate } = useNavigation();

  const handleUploadData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const result = await JSON.parse(AsyncStorage.multiGet(keys);
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbxcCaNLfucf8u_NyJc9Kzzw1rsGUGx-Nov2xMPU1n8wSRy4fvGK/exec";
      result.map((req) =>
        req.forEach(async () => {
          console.warn(req);
          await axios
            .get(scriptURL, { params: req })
            .then(async (r) => {
              await AsyncStorage.clear();
              navigate("Inicial");
            })
            .catch((e) => {
              alert("Erro:", e.message);
            });
        })
      );
    } catch (e) {
      alert("Erro:", e.message);
    }
  };

  return (
    <View style={styles.container}>
      <RectButton style={styles.startQuestionnarie} onPress={handleUploadData}>
        <Text style={styles.startQuestionnarieText}>Upload</Text>
      </RectButton>
    </View>
  );
};

export default UploadData;
