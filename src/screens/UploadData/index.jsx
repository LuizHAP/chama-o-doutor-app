import React, { useContext } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import AsyncStorage from "@react-native-community/async-storage";

import styles from "./style";

const UploadData = (props) => {
  const { navigate } = useNavigation();

  const handleUploadData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const result = await AsyncStorage.multiGet(keys);
      result.map((req) => req.forEach(console.log));
      await AsyncStorage.clear();
      navigate("Inicial");
    } catch (e) {
      console.log(e);
      alert(e);
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
