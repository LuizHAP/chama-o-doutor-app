import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import styles from "./style";

function Preload() {
  const { navigate } = useNavigation();

  const handleStartQuestionnarie = () => {
    navigate('Questionnarie');
  };

  return (
    <View style={styles.container}>
      <RectButton
        style={styles.startQuestionnarie}
        onPress={handleStartQuestionnarie}
      >
        <Text style={styles.startQuestionnarieText}>Iniciar</Text>
      </RectButton>
    </View>
  );
}

export default Preload;
