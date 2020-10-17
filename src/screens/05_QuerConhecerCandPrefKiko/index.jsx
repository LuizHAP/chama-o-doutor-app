import React, { useState, useContext } from "react";
import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { UserContext } from "../../contexts/UserContext";

import styles from "./style";

export default function ThirdStep() {
  const [show4thQuestion, setShow4thQuestion] = useState(false);
  const { navigate } = useNavigation();
  const { dispatch } = useContext(UserContext);

  const handleSecondYesAnswer = () => {
    dispatch({
      type: "ADD_FOURTHANSWER",
      payload: "Sim",
    });
    navigate("VideoKikoCand");
  };

  const handleSecondNoAnswer = () => {
    dispatch({
      type: "ADD_FOURTHANSWER",
      payload: "Não",
    });
    navigate("Final");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>Quer conhecer?</Text>
      <View style={styles.buttonsGroup}>
        <RectButton style={styles.buttonGreen} onPress={handleSecondYesAnswer}>
          <Text style={styles.buttonText}>Sim</Text>
        </RectButton>
        <RectButton style={styles.buttonRed} onPress={handleSecondNoAnswer}>
          <Text style={styles.buttonText}>Não</Text>
        </RectButton>
      </View>
    </View>
  );
}
