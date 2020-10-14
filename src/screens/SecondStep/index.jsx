import React, { useState, useContext } from "react";
import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { UserContext } from "../../contexts/UserContext";

import styles from "./style";

export default function SecondStep() {
  const { navigate } = useNavigation();
  const { dispatch } = useContext(UserContext);

  const handleYesAnswer = () => {
    dispatch({
      type: "ADD_SECONDANSWER",
      payload: "Aprova",
    });
    navigate("ThirdStep");
  };

  const handleNoAsnwer = () => {
    dispatch({
      type: "ADD_SECONDANSWER",
      payload: "Desaprova",
    });
    navigate("ThirdStep");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>
        Qual sua opinião sobre o governo do prefeito Kiko?
      </Text>
      <View style={styles.buttonsGroup}>
        <RectButton style={styles.buttonGreen} onPress={handleYesAnswer}>
          <Text style={styles.buttonText}>Aprova</Text>
        </RectButton>
        <RectButton style={styles.buttonRed} onPress={handleNoAsnwer}>
          <Text style={styles.buttonText}>Desaprova</Text>
        </RectButton>
      </View>
    </View>
  );
}
