import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import styles from "./style";

function Preload() {
  const { navigate } = useNavigation();

  const handleStartQuestionnarie = () => {
    navigate("Questionnarie");
  };

  const handleUploadData = () => {
    navigate("UploadData");
  };

  return (
    <View style={styles.container}>
      <RectButton
        style={styles.startQuestionnarie}
        onPress={handleStartQuestionnarie}
      >
        <Text style={styles.startQuestionnarieText}>Iniciar</Text>
      </RectButton>
      <RectButton style={styles.startQuestionnarie} onPress={handleUploadData}>
        <Text style={styles.startQuestionnarieText}>UploadData</Text>
      </RectButton>
    </View>
  );
}

export default Preload;
