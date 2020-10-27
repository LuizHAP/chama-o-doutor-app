import React from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import * as Network from "expo-network";

import landingImg from "../../assets/imagem/faem.png";

import styles from "./style";

function Preload() {
  const { navigate } = useNavigation();

  const handleStartQuestionnarie = () => {
    navigate("01-CandPrefeito");
  };

  const handleUploadData = async () => {
    const { isInternetReachable } = await Network.getNetworkStateAsync();
    if (isInternetReachable) {
      navigate("UploadData")
    } else {
      alert("Você está sem conexão com a internet")
    }
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
        <Text style={styles.startQuestionnarieText}>Enviar informações</Text>
      </RectButton>
    </View>
  );
}

export default Preload;
