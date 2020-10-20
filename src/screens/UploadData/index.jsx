import React, { useContext } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import * as Network from "expo-network";

import axios from "axios";

import AsyncStorage from "@react-native-community/async-storage";

import Api from "../../Api";

import styles from "./style";

const UploadData = (props) => {
  const { navigate } = useNavigation();

  const handleUploadData = async () => {
    const { isInternetReachable } = await Network.getNetworkStateAsync();
    if (isInternetReachable) {
      const keys = await AsyncStorage.getAllKeys();
      if (keys.length != 0) {
        const result = await AsyncStorage.multiGet(keys);
        const obj = Object.fromEntries(result);
        Object.keys(obj).forEach(async function (e) {
          let res = await Api.postAnswers(...e);
          if (res.error == "") {
            alert("Dados enviados com sucesso");
            navigate("Questionario");
            await AsyncStorage.clear();
          } else {
            console.warn(res.error);
            alert("Apresentou erros, tente novamente");
          }
        });
      } else {
        alert("Você precisa responder pelo menos uma vez o questionário");
        navigate("00-Inicial");
      }
    } else {
      alert("Você está sem conexão com a internet");
      navigate("00-Inicial");
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
