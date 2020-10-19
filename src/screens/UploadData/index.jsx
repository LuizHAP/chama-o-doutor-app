import React, { useContext } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import axios from "axios";

import AsyncStorage from "@react-native-community/async-storage";

import Api from "../../Api";

import styles from "./style";

const UploadData = (props) => {
  const { navigate } = useNavigation();

  const handleUploadData = async () => {
    const keys = await AsyncStorage.getAllKeys();
    const result = await AsyncStorage.multiGet(keys);
    await AsyncStorage.clear();
    result.map((item) => {
      object[`${item[0]}`] = item[1];
    });
    let res = await Api.postAnswers(object);
    if (res.error == "") {
      console.log("deu certo");
    } else {
      console.warn(res.error);
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
