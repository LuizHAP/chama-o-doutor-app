import React, { useContext } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import { UserContext } from "../../contexts/UserContext";

import AsyncStorage from "@react-native-community/async-storage";

import styles from "./style";

function Final() {
  const { navigate } = useNavigation();
  const { state } = useContext(UserContext);

  const asyncStorageSet = async () => {
    try {
      const stringfyID = JSON.stringify(state.id);
      await AsyncStorage.setItem(`ChamaODoutor - ${stringfyID}`, JSON.stringify(state));
    } catch (e) {
      console.log(e);
    }
  };

  const handlePreload = async () => {
    asyncStorageSet();
    navigate("Inicial");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textFinal}>Muito obrigado por sua participação!</Text>
      <RectButton style={styles.startQuestionnarie} onPress={handlePreload}>
        <Text style={styles.startQuestionnarieText}>Voltar</Text>
      </RectButton>
    </View>
  );
}

export default Final;
