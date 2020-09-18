import React, { useState, useContext } from "react";
import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { UserContext } from "../../contexts/UserContext";

import styles from "./style";

export default function ThirdStep() {
  const { navigate } = useNavigation();
  const { dispatch } = useContext(UserContext);

  const handleYesAnswer = () => {
    dispatch({
      type: "ADD_THIRDANSWER",
      payload: "Sim",
    });
    navigate("Preload");
  };

  const handleNoAsnwer = () => {
    dispatch({
      type: "ADD_THIRDANSWER",
      payload: "Não",
    });
    navigate("Preload");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>Sabe quem são os candidatos do prefeito Kiko?</Text>
      <View style={styles.buttonsGroup}>
        <RectButton style={styles.buttonGreen} onPress={handleYesAnswer}>
          <Text>Sim</Text>
        </RectButton>
        <RectButton style={styles.buttonRed} onPress={handleNoAsnwer}>
          <Text>Não</Text>
        </RectButton>
      </View>
    </View>
  );
}
