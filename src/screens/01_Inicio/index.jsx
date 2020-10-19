import React from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import landingImg from "../../assets/imagem/faem.png";

import styles from "./style";

function Preload() {
  const { navigate } = useNavigation();

  const handleStartQuestionnarie = () => {
    navigate("01-CandPrefeito");
  };

  const handleUploadData = () => {
    navigate("UploadData");
  };

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />
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
