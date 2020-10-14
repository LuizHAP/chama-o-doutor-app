import React, { useState, useContext } from "react";
import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { UserContext } from "../../contexts/UserContext";

import styles from "./style";

export default function FirstStep() {
  const { navigate } = useNavigation();
  const { dispatch } = useContext(UserContext);

  const handleYesAnswer = () => {
    dispatch({
      type: "ADD_FIRSTANSWER",
      payload: "Sim",
    });
    navigate("SecondStep");
  };

  const handleNoAsnwer = () => {
    dispatch({
      type: "ADD_FIRSTANSWER",
      payload: "Não",
    });
    navigate("SecondStep");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>Já tem candidato a prefeito?</Text>
      <View style={styles.buttonsGroup}>
        <RectButton style={styles.buttonGreen} onPress={handleYesAnswer}>
          <Text style={styles.buttonText}>Sim</Text>
        </RectButton>
        <RectButton style={styles.buttonRed} onPress={handleNoAsnwer}>
          <Text style={styles.buttonText}>Não</Text>
        </RectButton>
      </View>
    </View>
  );
}
