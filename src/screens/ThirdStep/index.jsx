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

  const handleYesAnswer = () => {
    dispatch({
      type: "ADD_THIRDANSWER",
      payload: "Sim",
    });
    //navigate("CandKiko");
  };

  const handleNoAsnwer = () => {
    dispatch({
      type: "ADD_THIRDANSWER",
      payload: "Não",
    });
    setShow4thQuestion(true);
  };

  const handleSecondYesAnswer = () => {
    dispatch({
      type: "ADD_FOURTHANSWER",
      payload: "Sim",
    });
    setShow4thQuestion(false);
    navigate('VideoKikoCand')
  };

  const handleSecondNoAnswer = () => {
    dispatch({
      type: "ADD_FOURTHANSWER",
      payload: "Não",
    });
    setShow4thQuestion(false);
    navigate("Final");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>
        Sabe quem são os candidatos do prefeito Kiko?
      </Text>
      <View style={styles.buttonsGroup}>
        <RectButton style={styles.buttonGreen} onPress={handleYesAnswer}>
          <Text>Sim</Text>
        </RectButton>
        <RectButton style={styles.buttonRed} onPress={handleNoAsnwer}>
          <Text>Não</Text>
        </RectButton>
      </View>
      {show4thQuestion && (
        <View>
          <Text style={styles.questionText}>Quer conhecer?</Text>
          <View style={styles.buttonsGroup}>
            <RectButton
              style={styles.buttonGreen}
              onPress={handleSecondYesAnswer}
            >
              <Text>Sim</Text>
            </RectButton>
            <RectButton style={styles.buttonRed} onPress={handleSecondNoAnswer}>
              <Text>Não</Text>
            </RectButton>
          </View>
        </View>
      )}
    </View>
  );
}
