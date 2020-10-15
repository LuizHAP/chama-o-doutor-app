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
    const keys = await AsyncStorage.getAllKeys();
    const result = await AsyncStorage.multiGet(keys);
    await AsyncStorage.clear();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxcCaNLfucf8u_NyJc9Kzzw1rsGUGx-Nov2xMPU1n8wSRy4fvGK/exec";
    let object = {};
    result.map((item) => {
      object[`${item[0]}`] = item[1];
    });
    console.log(object);
    await axios
      .get(scriptURL, {
        params: { id: object.id, nomeColaborador: object.nomeColaborador },
      })
      .then(async (r) => {
        navigate("Inicial");
      })
      .catch((e) => {
        alert(`${e}`);
      });
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
