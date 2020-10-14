import React, { useState, useContext } from "react";
import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { UserContext } from "../../contexts/UserContext";

import styles from "./style";

export default function ConheceCand() {
  const { navigate } = useNavigation();
  const { dispatch } = useContext(UserContext);

  const handleYesAnswer = () => {
    dispatch({
      type: "ADD_CONHECECAND",
      payload: "Nivaldo",
    });
    navigate("Nivaldo");
  };

  const handleNoAsnwer = () => {
    dispatch({
      type: "ADD_CONHECECAND",
      payload: "Outro",
    });
    navigate("OutroCand");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>
        Quem é?
      </Text>
      <View style={styles.buttonsGroup}>
        <RectButton style={styles.buttonGreen} onPress={handleYesAnswer}>
          <Text style={styles.buttonText}>Nivaldo</Text>
        </RectButton>
        <RectButton style={styles.buttonRed} onPress={handleNoAsnwer}>
          <Text style={styles.buttonText}>Outro</Text>
        </RectButton>
      </View>
    </View>
  );
}
