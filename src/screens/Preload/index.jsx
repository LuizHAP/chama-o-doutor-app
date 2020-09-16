import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import styles from "./style";

function Preload() {

  const navigation = useNavigation();

  const handleStartQuestionnarie = () => {

  }

  return (
    <View style={styles.container}>
      <RectButton style={styles.signButton} onPress={handleStartQuestionnarie}>
        <Text style={styles.signButtonText}>Iniciar</Text>
      </RectButton>
    </View>
  );
}

export default Preload;